import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  // public login(param: LoginModel): Observable<any> {
  //   return this.post(LOGIN, param);
  // }
}
