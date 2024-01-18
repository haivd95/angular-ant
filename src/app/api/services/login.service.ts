import { ConstantsApp } from './../../shared/Constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoginModel, getInfoUserModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apiService: ApiService) { }

  public login(param: LoginModel): Observable<any> {
    return this.apiService.post(ConstantsApp.LOGIN, param);
  }

  public getUserInfo(param: getInfoUserModel): Observable<any> {
    const url = ConstantsApp.USER_LOGIN_INFO + `/${param.id}`
    return this.apiService.get(url);
  }

}
