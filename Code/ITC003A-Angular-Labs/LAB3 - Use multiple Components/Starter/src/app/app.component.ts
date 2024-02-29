import { Component } from '@angular/core';
import { Priority, Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

  newTask: Task = {
    id: 0,
    description: "",
    completed: false,
    priority: Priority.Normal
  };

  low = {
    value: Priority.Low,
    label: "Low"
  }
  normal = {
    value: Priority.Normal,
    label: "Normal"
  }
  high = {
    value: Priority.High,
    label: "High"
  }

  tasks: Task[] = [];

  addTask(task:Task) {
    task.id = this.getNextId()
    this.tasks.push(task);
    this.newTask = { id: 0, description: '', completed: false, priority: Priority.Normal };
    console.log(this.tasks)
  }

  private getNextId(): number {
    return this.tasks.length + 1;
  }

}
