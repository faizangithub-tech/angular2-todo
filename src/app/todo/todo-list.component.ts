import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `<div>
                <h1>Todo App</h1>
                <input #todoInput type="text" (keyup)="0" />
                <button [disabled]="todoInput.value == ''">Add</button>
            </div>`
})
export class TodoList {
  todos : string[] = []
}
