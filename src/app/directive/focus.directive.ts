import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';
import { FocusService } from '../service/focus.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'a, input, button'
})
export class FocusDirective {
  @Input()
  focusClass: string = 'tab-focus';

  constructor(private focusService: FocusService, private elementRef: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onkeydown($event: KeyboardEvent) {
    if ($event.keyCode === 9) {
      this.focusService.keyboardFocus = true;
    }
    if($event.keyCode === 27) {
      this.elementRef.nativeElement.blur();
    }
  }

  @HostListener('keyup', ['$event'])
  onkeyup($event: KeyboardEvent) {
    if ($event.keyCode === 9) {
      this.focusService.keyboardFocus = true;
    }
    this.addClass();
  }

  @HostListener('mousedown')
  onmousedown() {
    this.focusService.keyboardFocus = false;
  }

  @HostListener('focusin')
  onfocusin() {
    this.addClass();
  }

  @HostListener('focusout')
  onfocusout() {
    this.removeClass();
  }

  private addClass() {
    if (this.focusService.keyboardFocus && !(this.elementRef.nativeElement as HTMLElement).classList.contains(this.focusClass)) {
      this.elementRef.nativeElement.classList.add(this.focusClass);
    }
  }

  private removeClass() {
    (this.elementRef.nativeElement as HTMLElement).classList.remove(this.focusClass);
  }

}
