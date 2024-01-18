import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  private loadingSubject = new Subject<boolean>();
  loadingState = this.loadingSubject.asObservable();

  show() {
    console.log('________2222________', 2222);
    this.loadingSubject.next(true);
  }

  hide() {
    console.log('________333333________', 333333);
    this.loadingSubject.next(false);
  }
}
