import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
    // this.elem.nativeElement.style.textDecotation = 'line-through';
   }
@HostListener('click') onClicks(){
  this.textDeco('line-through');
}

@HostListener('dbClick') onDoubleClicks(){
  this.textDeco('None')
}

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecotation=action;

}
}
