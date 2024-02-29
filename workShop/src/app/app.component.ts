import { Component } from '@angular/core';
import { Priority, TaskTesting } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

 tasks: TaskTesting[]=[]

 defaultPriority = Priority.Normal

 addTask(task: TaskTesting): void {
  //TODO implement
  task.id = this.tasks.length;
  this.tasks.push(task);
  }

  change(){
    this.defaultPriority = Priority.High
  }

  
}
