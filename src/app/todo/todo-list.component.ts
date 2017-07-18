import { Component } from '@angular/core';

export class Todo {
  task: string
  done: boolean
}

@Component({
  selector: 'todo-list',
  template: `<div>
                <h1>Todo App</h1>
                <input #todoInput type="text" (keyup)="0" />
                <button [disabled]="todoInput.value == ''">Add</button>
                <hr/>
                <ul class="list-group">
                  <li *ngFor="let todo of todos; let i = index" class="list-group-item">
                    {{i+1}}. {{ todo.task }}
                  </li>
                </ul>
            </div>`
})
export class TodoList {
  todos : Todo[] = [
    { task: "Buy groceries", done: false },
    { task: "Do laundry", done: false },
    { task: "Dental appointment", done: true }
  ]
}
