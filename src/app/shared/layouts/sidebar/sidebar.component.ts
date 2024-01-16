import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  isScrollable: boolean = false;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.checkScrollable();
  }

  private checkScrollable() {
    const contentWrapper = this.elementRef.nativeElement.querySelector('#scrollbar-color');
    if (contentWrapper.scrollHeight > 800) {
      this.isScrollable = true;
    } else {
      this.isScrollable = false;
    }
  }

}
