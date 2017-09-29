import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    dataTodos: any[] = [
        {id: 1, titre: "Todo titre 1", body: 'contenu du todo 1'},
        {id: 2, titre: "Todo titre 2", body: 'contenu du todo 2'},
        {id: 3, titre: "Todo titre 3", body: 'contenu du todo 3'}
    ];
    fieldsTodos: any[] = ['titre', 'description'];
    currentTodo={};
    Fields= [
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
    /*fieldsTodos:any[]=[
     {
     titre:"Titre",
     width:"100px"
     },
     {
     titre:"description",
     width:"100px"
     }
     ];*/
    isEditing:boolean=false;
    constructor(private  todosServices: SearchService) {
    }

    ngOnInit() {
        console.log(this.Fields);
        this.todosServices.getAllTodos().subscribe((jsondata) => {

            this.dataTodos = jsondata;
        });
    }

    getTodosByInput(input) {
        console.log("input:" + input);
        this.todosServices.findTodosByInput(input).subscribe((jsondata) => {
            console.log(jsondata);
            this.dataTodos = jsondata;
        });
    }

    DeleteTodo(input) {
        this.todosServices.deleteTodoByInput(input).subscribe((jsondata)=>{
           //Ajouter au tableau les elements qui n'ont pas le même ID que l'input deleted.
            this.dataTodos=this.dataTodos.filter(function (element) {
                return element.id!=input.id;
            });
            // this.dataTodos=array;
            console.log("from home jsondata:",this.dataTodos);
        });
      }

    EditTodo(input) {
        //toggle du champ
        // this.isEditing=true;
        this.isEditing=!this.isEditing;
        this.currentTodo=input;
        console.log("input from home in EditTodo:",input);
    }
    onEmptyForm(){
        // this.currentTodo={};
        this.isEditing=!this.isEditing;
    }
    SubmitTodo(input){
console.log("SubmitTodo input:",input);
        if(input.id==undefined){
            this.todosServices.addTodo(input).subscribe((jsondata)=>{
                console.log("SubmitTodo add jsondata:",jsondata);
                // this.dataTodos = jsondata;
                // console.log(this.isEditing);
            });
            // this.onEmptyForm();
        }else{
        this.todosServices.updateTodo(input).subscribe((jsondata)=>{
           console.log("SubmitTodo update jsondata:",jsondata);
           //   this.dataTodos = jsondata;
        });
        }
        this.isEditing=!this.isEditing;
        // console.log(" this.isEditing:", this.isEditing)
    }
}
