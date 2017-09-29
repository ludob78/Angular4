import {Directive, ElementRef, Renderer2} from '@angular/core';
@Directive({
    selector:"[directive1]"
})
export class Directive1{
    constructor(elementRef:ElementRef,renderer:Renderer2){
        console.log("elementRef:",elementRef);
        renderer.setStyle(elementRef.nativeElement,"color","red");
        // ou
        elementRef.nativeElement.style.backgroundColor="yellow";
        elementRef.nativeElement.style.padding="5px";
        elementRef.nativeElement.style.border="1px solid black";

    }

}