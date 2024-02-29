import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task, Priority } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {


 
  priorities = [Priority.Low, Priority.Normal, Priority.High]

  newTask: Task = {
    id: 0,
    description: "",
    completed: false,
    priority: Priority.Normal
  };
  
  constructor(private taskService: TaskService, private router:Router) {

  }

  ngOnInit(): void {
    this.newTask = {
      id: 0,
      description: "",
      completed: false,
      priority: this.taskService.getDefaultPriority()
    };
  }


  addTask(task:Task) {
    this.taskService.addTask(task).subscribe({
      next:()=>{
        this.router.navigate(["/tasks"])
      },
      error:(error)=>{
        console.log(error)
      }
    }) 
  }

    

}
