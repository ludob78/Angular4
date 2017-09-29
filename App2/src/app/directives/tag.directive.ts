import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: 'todo'
})
export class TagDirective {

  constructor(elt:ElementRef) {
    // console.log(elt)
  }
  @Input()
  id:number;
  @Input()
  title:string;
  @Input()
  body:string;
}
