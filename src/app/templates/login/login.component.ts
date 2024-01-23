import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../../api/services/login.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';
import { LoadingSpinnerService } from '../../api/services/loadingSpinnerService.service';
import { concatMap, finalize } from 'rxjs';
import { Store } from '@ngrx/store';
import { SetUserInfoAction } from './user-info.actions';
import { AppState } from '../../shared/store/app.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private apiLogin: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loadingSpinnerService: LoadingSpinnerService,
    private store: Store<AppState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loadingSpinnerService.loadingState.subscribe((loading) => {
      this.loading = loading;
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loadingSpinnerService.show();
      const user = this.loginForm.value;
      this.apiLogin.login(user).pipe(
        concatMap((loginResponse) => {
          // Lưu token vào localStorage
          localStorage.setItem('token', loginResponse.token);
          // Gọi API getUserInfo() sau khi đăng nhập thành công
          this.loadingSpinnerService.hide();
          return this.apiLogin.getUserInfo({ id: '1' });
        })
      ).subscribe({
        next: (userInfo) => {
          this.store.dispatch(new SetUserInfoAction(userInfo));
          this.router.navigate(['./'])
          this.toastr.success('Login success')
        },
        error: (e) => {
          this.toastr.error(e.status.message)
          this.loadingSpinnerService.hide();
        }
      }
      );
    }
  }
}
