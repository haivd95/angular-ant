import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[focusFirstInvalidField]'
})
export class FocusFirstInvalidFieldDirective {

  constructor(private el: ElementRef) { }

  @HostListener('submit')
  onFormSubmit() {
    console.log('________1________', 1);
    const invalidElements = this.el.nativeElement.querySelectorAll('.ng-invalid');
    if (invalidElements.length > 0) {
      console.log(invalidElements[0]);

      invalidElements[0].focus();
    }
  }
}
