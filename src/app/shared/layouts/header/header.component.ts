import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeLanguageService } from '../../../api/services/switch-translate.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isVisible = false;
  isOkLoading = false;
  isConfirmLoading = false;
  isLanguage = localStorage.getItem('language');

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private changeLanguageService: ChangeLanguageService
  ) {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.toastr.success('Logout success')
  }
  changeLanguage(lang: string) {
    this.changeLanguageService.changeLanguage(lang);
    this.isLanguage = localStorage.getItem('language');
    setTimeout(() => {
      this.isVisible = false;
    }, 100);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
