import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-form',
    template: `
        <button class="btn btn-success" (click)="visible=true">Ajouter</button>
        <div *ngIf="visible" class="Over" >
            <form (submit)="submitForm($event)">
                <div class="form-group" *ngFor="let field of formFields">
                             <input [(ngModel)]="data_object[field.name]" 
                                    [name]="field.name" 
                                    *ngIf="field.tag == 'input'" 
                                    class="form-control col-sm-5 offset-sm-3" 
                                    [type]="field.type" 
                                    [placeholder]="field.placeholder" 
                                    [maxLength]="field.maxLength" 
                                    [value]="field.value"
                             >
                                <textarea *ngIf="field.tag == 'textarea'"
                                          [(ngModel)]="data_object[field.name]"
                                          class="form-control col-sm-5 offset-sm-3"
                                          [placeholder]="field.placeholder" 
                                          [maxLength]="field.maxLength"
                                          [value]="field.value" 
                                          [name]="field.name"
                                >
                                </textarea>
                           <br>
                </div>
                <div class="form-group">
                    <input class="form-control" type="submit" value="Valider" class="btn btn-success">
                    <!--<input class="form-control" type="submit" value="Fermer" class="btn"  (click)="visible=false">-->
                </div>
            </form>
        </div>
    `,
    styles: [`
        div.Over {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
            z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer; /* Add a pointer on hover */
            text-align: center;
            vertical-align: middle;
        }
        form {
            position: relative;
            margin-top: 25%;
        }
    `]
})

export class FormComponent implements OnInit{


    @Input('data')
    data_object={};

    //recoit la donnée des variable du component app-form
    @Input()
    visible: boolean = false;

ngOnInit(){
    console.log("this.formFields:",this.formFields)
}
        //pas d'utilisation d'interface
    // @Input()
    // formFields: any[] = [
        //utilisation d'interface
    @Input("Fields")
    formFields: Field[] = [
        {
            value: "",
            placeholder: "id",
            maxLength: 10,
            type: "hidden",
            tag:"input",
            name:"id"
        },
        {
            value: "",
            placeholder: "titre",
            maxLength: 50,
            type: "text",
            tag:"input",
            name:"titre"
        },
        {
            value: "",
            placeholder: "description",
            maxLength: 512,
            type: "text",
            tag:"textarea",
            name:"description"
        }
    ];

    constructor() {
    }



    @Output('onSubmit')
    SubmitEventEmitter= new EventEmitter();
    submitForm(event){
        console.log("submitForm event:",event);
        event.preventDefault();
        console.log("this.data_object:",this.data_object);
        this.SubmitEventEmitter.emit(this.data_object);

    }
}
interface Field {
    value: string;
    placeholder: string;
    maxLength: number;
    type: string;
    tag:string;
    name:string;
}
