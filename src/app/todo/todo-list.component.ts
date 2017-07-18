import { Component } from '@angular/core';

export class Todo {
  task: string
  done: boolean
}

@Component({
  selector: 'todo-list',
  inputs: ['name'],
  template: `<div>
                <h1>{{ name }}</h1>
                <input [(ngModel)]="input_data" />
                <button [disabled]="!input_data" (click)="addTodo(input_data)">Add</button>
                <hr/>
                <ul class="list-group">
                  <ng-container *ngFor="let todo of getPendingTodos(); let i = index">
                    <li class="list-group-item">
                      {{i+1}}. {{ todo.task }}
                    </li>
                  </ng-container>
                </ul>
            </div>`,
  styles: ['li { text-align: left }']
})
export class TodoList {
  name : string = "Todo App";
  input_data : string;
  todos : Todo[] = [
    { task: "Buy groceries", done: false },
    { task: "Do laundry", done: false },
    { task: "Dental appointment", done: true }
  ]

  public getPendingTodos() : Todo[] {
    let filtered_todos : Todo[] = [];
    for (let i=0; i<this.todos.length; i++) {
      if (!this.todos[i].done) {
        filtered_todos.push( this.todos[i] );
      }
    }
    return filtered_todos;
  }

  public addTodo( task: string ) : void {
    let todo : Todo = new Todo();
    todo.task = task;
    todo.done = false;
    this.todos.push( todo );
    this.input_data = "";
  }
}
