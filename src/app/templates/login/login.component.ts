import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../../api/services/login.service';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private apiLogin: LoginService, private formBuilder: FormBuilder, private message: NzMessageService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {
    // this.apiLogin.login({}).subscribe((data) => {
    //   console.log('________data________', data);
    // });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.apiLogin.login(user).subscribe((data) => {
        if(data.token) {
          localStorage.setItem('TOKEN', data.token);
        } else {
          console.log('________data________', data);
          this.message.create('success', data)
        }
      });
    }
  }
}
