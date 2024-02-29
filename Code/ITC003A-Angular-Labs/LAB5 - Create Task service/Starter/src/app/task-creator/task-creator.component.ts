import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, Priority } from '../task';

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
  
  constructor() { }

  ngOnInit(): void {
    this.newTask = {
      id: 0,
      description: "",
      completed: false,
      priority: this.defaultPriority
    };
  }


  addTask(task:Task) {
    task.id = this.getNextId()
    //this.tasks.push(task);
    this.newTask = { id: 0, description: '', completed: false, priority: this.defaultPriority };
    //console.log(this.tasks)
    this.onTaskCreated.emit(task)
  }

  private getNextId(): number {
    return (Math.random()*100)+1
  }

}
