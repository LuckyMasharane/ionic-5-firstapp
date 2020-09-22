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

  getAllTodoList(){
    return this.todo_list;
  }
  addToDo(todo: Todolist) {
    this.todo_list.push({
      id: this.todo_list.length,
      content: todo.content,
      status:todo.status,
      priority: todo.priority,
    });
  }
  updateEmployee(todo: Todolist) {
    const index = this.todo_list.findIndex(c => c.id === todo.id);
    if ( index  >-1) {
      this.todo_list[index] = todo;
    }
  }
  deleteEmployee(id: number) {
    const tdo = this.todo_list.findIndex(c => c.id == id);
    if (tdo >-1) {
      this.todo_list.splice(tdo,1);
    }
  }

}