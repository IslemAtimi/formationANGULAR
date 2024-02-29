import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Priority, Task } from "./task";

@Injectable()
export abstract class TaskService {

  abstract searchTasks(keyword?:string): Observable<Task[]>;

  abstract getAllTasks(): Observable<Task[]>;
  abstract addTask(task: Task):Observable<any>;
  abstract removeTask(task: Task):Observable<any>;

  abstract getDefaultPriority(): Priority
}