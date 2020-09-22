import { Injectable } from '@angular/core';
import { Todolist } from './todolist';

@Injectable()
export class TodosService {

  constructor() { }

  todo_list: Todolist[] = [
    { id:1, content:"Web App", status:"Completed", priority:"High" },
    { id:2, content:"Mobile App", status:"In Progress", priority:"Low" },
    { id:3, content:"Building a circuit", status:"In progress", priority:"High" },
    { id:4, content:"Video Ad", status:"Not Complete", priority:"Low" }
  ]

}