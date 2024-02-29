import { Component, Input, OnInit } from '@angular/core';
import { Priority, Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];
   
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  get Priority() {
    return Priority
  }

}
