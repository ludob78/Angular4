import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList} from '@angular/core';
import {TagDirective} from '../../directives/tag.directive';
@Component({
    selector: 'todos',
    template: `
        <!--<div class="row" [ngClass]="{odd:(i%2)==0,bold:((i+1)%2)==0}" *ngFor="let todo of todosList;let i=index">-->
        <div class="row" [ngClass]="getClass(todo,i)" *ngFor="let todo of todosList;let i=index">
            <div class="col-sm-2 ">{{todo.id + " - " + i}}</div>
            <div class="col-sm-4 ">{{todo.title}}</div>
            <div class="col-sm-6 ">{{todo.body}}</div>
        </div>`,
    styles: [`
        .odd {
            background-color: darkgrey;
        }
        .bold{
            font-weight:bold;
        }
    `]
})
export class TagComponent implements AfterViewInit {
    @ContentChildren(TagDirective)
    todosList: QueryList<TagDirective>;

    constructor(elt: ElementRef) {

    }

    ngAfterViewInit() {
        console.log(this.todosList)
    }
    getClass(todo,i){

        var classes = "";
        if((i%2)==0){classes += "odd"}//ou   classes+=(i%2)==0?"odd":"";
        if((todo.id % 2)==0){classes += " bold"}
        console.log(classes);
        return classes;
    }
    applyBold(i){
        //{odd:(i%2)==0,bold:applyBold(i)}
        if(((i+1)%2)==0){
            return true;
        }else {
            return false;
        }

    }

}
