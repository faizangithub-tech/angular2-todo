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
                  <ng-container *ngFor="let todo of getPendingTodos(); let i = index">
                    <li class="list-group-item">
                      {{i+1}}. {{ todo.task }}
                    </li>
                  </ng-container>
                </ul>
            </div>`
})
export class TodoList {
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
}
