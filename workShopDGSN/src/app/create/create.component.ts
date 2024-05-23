import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Priority, Task } from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit,OnChanges {

  @Input() valueInput: string = "";
  @Output() valueSend = new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log("je suis le hook OnChanges")
  }
  ngOnInit(): void {
    console.log("je suis le hook OnInit",this.valueInput)
    this.newTask.description=this.valueInput
    
  }
  

  tasks: Task[] = [];

  newTask: Task = {
    id: 0,
    description: this.valueInput,
    completed: false,
    priority: Priority.Normal
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
  AddTask(task:Task) {
    console.log(task)
    this.valueSend.emit(task.description)
   
  }
}
