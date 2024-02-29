import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, Priority } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {


	@Input("default") defaultPriority: Priority = Priority.Normal
  @Output() onTaskCreated = new EventEmitter<Task>()
  
  priorities = [Priority.Low, Priority.Normal, Priority.High]

  newTask: Task = {
    id: 0,
    description: "",
    completed: false,
    priority: this.defaultPriority
  };
  
  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.newTask = {
      id: 0,
      description: "",
      completed: false,
      priority: this.defaultPriority
    };
  }


  addTask(task:Task) {
    this.taskService.addTask(task)
    this.onTaskCreated.emit(task)
  }

    

}
