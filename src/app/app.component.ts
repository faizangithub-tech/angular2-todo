import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do list App is simple one!!';

  public popup(event) : void {
    let tmp_title = this.title;
    this.title = 'Todo List App (+' + event + ')';
    console.log("Added new todo: " + event);
    setTimeout(() => { this.title = tmp_title }, 3000);
  }
}
