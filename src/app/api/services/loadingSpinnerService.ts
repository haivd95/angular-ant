import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  private loadingSubject = new Subject<boolean>();
  loadingState = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
