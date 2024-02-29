import { Component, Input, OnInit } from '@angular/core';
import { Priority, Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  @Input() tasks: Task[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  get Priority() {
    return Priority
  }

}
