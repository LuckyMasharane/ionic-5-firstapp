import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private _todosService: TodosService) { }

  ngOnInit() {
  }

  todo =[
    { content:"Web App", status:"Completed", priority:"High" },
    { content:"Mobile App", status:"In Progress", priority:"Low" },
    { content:"Building a circuit", status:"In progress", priority:"High" },
    { content:"Video Ad", status:"Not Complete", priority:"Low" }
  ]

  getTodolist(){
    return this._todosService.getAllTodoList();
  }

  

}