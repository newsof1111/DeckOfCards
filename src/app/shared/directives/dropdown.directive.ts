import {Directive, HostListener, HostBinding, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /* linking "show" class to isOpen boolean variable,so when isOpen is true the usedIn directive will have a class called "show"   */
  @HostBinding('class.show') isOpen = false;

  constructor(private renderer: Renderer2 , private el: ElementRef) { }

  /* Binding onClick event to the attached element   */
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggleMenuContent();
  }

  /* toggleMenuContent function for showing the menu hidden OR inverse     */
  toggleMenuContent() {
    const menu = this.el.nativeElement.querySelector('.dropdown-menu') ;
    if (this.isOpen) {
      this.renderer.addClass(menu, 'show');
    } else {
      this.renderer.removeClass(menu, 'show');
    }
  }


}
