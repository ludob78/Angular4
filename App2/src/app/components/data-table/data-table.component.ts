import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
@Component({
    selector: 'app-data-table',
    animations: [
        trigger('list', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void=>*', [
                style({
                    opacity:0,
                    transform:'translateX(-100px)'
                }),
                animate(300)
            ])
        ])
    ],
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    @Input('data')
    data: any[];
    @Input('fields')
    fields: any[];

    state = 'normal';

    constructor() {
    }

    ngOnInit() {
    }
    getFieldValue(row,field):string{
        if (field.indexOf(".")==-1){
            return row[field];
       }else{
            var arrayfields=field.split('.');
            return row[arrayfields[0][arrayfields[1]]];
        }
    }
    @Output('deleteAction')
    deleteEventEmitter = new EventEmitter();

    DeleteOnClick(row) {
        this.deleteEventEmitter.emit(row);
        // console.log(row)
    }

    @Output('editAction')
    editEventEmitter = new EventEmitter();

    EditOnClick(row) {
        this.editEventEmitter.emit(row);
        // console.log(row)
    }


}
