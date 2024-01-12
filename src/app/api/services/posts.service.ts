import { ConstantsApp } from '../../shared/Constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private apiService: ApiService) { }

  public posts(): Observable<any> {
    return this.apiService.get(ConstantsApp.POSTS);
  }

}
