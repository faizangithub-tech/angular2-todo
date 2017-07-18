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
                  <li class="list-group-item">{{ todos[0].task }}</li>
                  <li class="list-group-item">{{ todos[1].task }}</li>
                  <li class="list-group-item">{{ todos[2].task }}</li>
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
