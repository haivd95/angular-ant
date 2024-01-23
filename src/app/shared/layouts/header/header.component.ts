import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private  router: Router, private toastr: ToastrService) {

  }
  logout () {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
    this.toastr.success('Logout success')
  }
}
