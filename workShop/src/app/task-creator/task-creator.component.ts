import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Priority, TaskTesting } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit,OnChanges {

  @Input() default:Priority=Priority.Low
  @Output() newTaskCreated = new EventEmitter()
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.newTask = {
      id: 0,
      description: "",
      completed: false,
      priority: this.default,
      };
  }

  ngOnChanges(changes:any){
    console.log(this.default)
    this.newTask.priority = this.default
    console.log(changes)
  }

  newTask: TaskTesting = {
    id: 0,
    description: "",
    completed: false,
    priority: this.default,
    };

    low = {
      value: Priority.Low,
      label: "Low"
      };
    normal = {
      value: Priority.Normal,
      label: "Normal"
      }
    high = {
      value: Priority.High,
      label: "High"
      }


      addTask(task: TaskTesting): void {
        //TODO implement
        console.log(task)
        this.newTaskCreated.emit(task)
        }
        goTo(){
          this.route.navigate(['/first'],{queryParams:{name:"islem",profile:"angular"}})
        }
}
