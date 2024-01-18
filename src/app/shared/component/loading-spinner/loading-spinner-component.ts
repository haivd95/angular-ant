import { Component } from '@angular/core';
import { LoadingSpinnerService } from '../../../api/services/loadingSpinnerService';

@Component({
  selector: 'app-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  loading: boolean = false;

  constructor(private loadingSpinnerService: LoadingSpinnerService) {
    this.loadingSpinnerService.loadingState.subscribe((loading) => {
      this.loading = loading;
    });
  }
}



