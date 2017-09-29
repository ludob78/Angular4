import {Directive, ElementRef} from '@angular/core';

// declare var jQuery:any;

@Directive({
  selector: '[appRowhover]'
})
export class RowhoverDirective {

  constructor(elt:ElementRef) {
  let Line=elt.nativeElement;
    /*jQuery(Line).on('mouseenter',function () {
      Line.style.backgroundColor="yellow";
      Line.style.textShadow="1px 1px black";
      Line.style.fontSize="bold";
    });*/
    Line.addEventListener('mouseenter',function () {
      Line.style.backgroundColor="yellow";
      // Line.style.textShadow="1px 1px black";
      Line.style.fontWeight="bold";
    });
    Line.addEventListener('mouseleave',function () {
      Line.style.backgroundColor="inherit";
      // Line.style.textShadow="inherit";
      Line.style.fontWeight="inherit";
    })

  }

}
