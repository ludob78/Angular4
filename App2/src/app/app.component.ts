import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "./services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  dataTodos=[];
  constructor(public todosServices:SearchService){
    // console.log("this.todosService.getAllTodos():",this.todosServices.todosList)
     this.todosServices.getAllTodos()
  }
  ngOnInit(){

  }
  findTodosByInput(input){
    console.log("input in app component",input);
    this.todosServices.findTodosByInput(input).subscribe((jsondata) => {
      console.log("jsondata in app component",jsondata);
      this.dataTodos = jsondata;
    });
  }
}
