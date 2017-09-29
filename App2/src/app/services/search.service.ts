import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SearchService {

 // url:string="https://jsonplaceholder.typicode.com/users";
   url:string="http://127.0.0.1:8080/todo";
  todosList:any[]=[];
  constructor(private http:Http) {

  }
  getAllTodos(){
    console.log("this.url:"+this.url);
    // permet de recevoir la réponse en json
    return this.http.get(this.url).map(res=>res.json());
  }
  findTodosByInput(input){
    console.log('titre:'+input);
    console.log('this.url+"/searchbyinput/"+input:'+this.url+"/searchbyinput/"+input);
    return this.http.get(this.url+"/searchbyinput/"+input).map(res=>res.json());

  }
  deleteTodoByInput(input){
    console.log("input from service deleteTodoByInput:",input);
   return this.http.delete(this.url,{body:input}).map(res=>res.json());
  }
  updateTodo(input){
    console.log("input from service updateTodo:",input);
    return this.http.post(this.url,input).map(res=>res.json());

  }
  addTodo(input){
    // console.log("this.url,{body:input}",this.url,{body:input});
    console.log("input from service addTodo:",input);
    return this.http.put(this.url,input).map(res=>res.json());
  }
}
