import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreadcrumbModel } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingBreadcrumbService {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setDataBreadcrumb(data: BreadcrumbModel) {
    this.dataSubject.next(data);
  }

  getDataBreadcrumb(): Observable<any> {
    return this.dataSubject.asObservable();
  }
}
