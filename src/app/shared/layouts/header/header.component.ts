import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeLanguageService } from '../../../api/services/switch-translate.service';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private  router: Router, private toastr: ToastrService, private changeLanguageService: ChangeLanguageService) {

  }
  logout () {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
    this.toastr.success('Logout success')
  }
  changeLanguage(lang: string) {
    this.changeLanguageService.changeLanguage(lang)
  }
}
