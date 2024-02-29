import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, Subscription, switchAll, switchMap } from 'rxjs';
import { Priority, Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  subscription?: Subscription

  search$ = new BehaviorSubject<string>("")

  constructor(private taskService: TaskService) { }
  

  ngOnInit(): void { 
    this.search$.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).
    subscribe(keyword=>this.searchTasks(keyword))
  }

  searchTasks(keyword: string = "") {
    this.subscription = this.taskService.searchTasks(keyword).subscribe(tasks=>{
      this.tasks = tasks
    });
  }
 

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  removeTask(task:Task) {
    this.taskService.removeTask(task).subscribe()
  }

  get Priority() {
    return Priority
  }

}
