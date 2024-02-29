import { Component, OnInit } from '@angular/core';
import { Priority, Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskManager';

  defaultPriority: Priority = Priority.Low

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }


  ngOnInit(): void {
     this.tasks = this.taskService.getAllTasks();
  }

  onTaskCreated(task:Task) {
    this.tasks = this.taskService.getAllTasks();
  }

   

}
