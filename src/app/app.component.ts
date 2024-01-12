import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Angular core';
}
