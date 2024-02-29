import { Component } from '@angular/core';
import { Priority, Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

  defaultPriority: Priority = Priority.Low

  tasks: Task[] = [];


  onTaskCreated(task:Task) {
    this.tasks.push(task)
    console.log(this.tasks)
  }
  

}
