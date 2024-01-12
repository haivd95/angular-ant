import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceFacade {
  private baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  public getComplexData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/complex-data`);
  }

  public processComplexData(data: any): any {
    // Xử lý dữ liệu phức tạp ở đây
    return data;
  }

  public callApi(): Observable<any> {
    return this.getComplexData()
      .pipe(
        map((data: any) => this.processComplexData(data))
      );
  }
}
