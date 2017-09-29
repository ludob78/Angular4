import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public todoService:SearchService) {

  }

  ngOnInit() {
    //renvoi un observable
    this.todoService.getAllTodos().subscribe((data)=>{
      console.log(data);
      this.todoService.todosList=data;
    });
    // console.log(this.todoService.todosList)
  }

}
