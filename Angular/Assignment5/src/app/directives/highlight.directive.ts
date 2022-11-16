import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]' //Referred in html as an attribute
})
export class HighlightDirective implements OnInit {
  public el:ElementRef;

  @Input()
  public value:string | undefined;

  constructor(element:ElementRef) {
    //element.nativeElement.style.backgroundColor = "#adb5bd";
    this.el = element;
  }

   ngOnInit() {
    console.log("Value of color which is changed here --> ", this.value);
    this.el.nativeElement.style.backgroundColor = this.value;
   }

}
