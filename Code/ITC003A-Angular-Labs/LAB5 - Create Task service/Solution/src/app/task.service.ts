import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable()
export abstract class TaskService {
  abstract getAllTasks(): Task[];
  abstract addTask(task: Task): Task[];
  abstract removeTask(task: Task): Task[];
}