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
