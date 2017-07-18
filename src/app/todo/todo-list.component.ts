import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `<div>
                <h1>Todo App</h1>
                <input type="text" />
                <button>Add</button>
            </div>`
})
export class TodoList {
  todos : string[] = []
}
