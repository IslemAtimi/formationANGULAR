import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import { Priority, Task } from "./task";
import { TaskService } from "./task.service";

@Injectable()
export class MockTaskService extends TaskService {
   
    

    private tasks: Task[] = [
        {
            id: 1, description: 'fix bug',
            completed: false, priority: Priority.Normal
        },
        {
            id: 2, description: 'set up unit tests',
            completed: false, priority: Priority.High
        },
        {
            id: 3, description: 'fix the UI',
            completed: false, priority: Priority.Low
        }
    ];
    
    private tasks$ = new BehaviorSubject<Task[]>(this.tasks)

    getAllTasks(): Observable<Task[]> {
        return this.tasks$
    }

    searchTasks(keyword: string = ""): Observable<Task[]> {
        return this.tasks$.pipe(
            map(tasks=>tasks.filter(task=>task.description.includes(keyword)))
        )
    }

    addTask(task: Task): void {
        let _task = {
            ...task,
            id: this.generateId()
        } 
        this.tasks = this.tasks.concat(_task);
        this.tasks$.next(this.tasks)
    }

    removeTask(task: Task): void {
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1));
            this.tasks$.next(this.tasks)
        } 
    }

    getDefaultPriority(): Priority {
        return Priority.Normal
    }

    private generateId():number {
        return (Math.random()*100)+1
    }

}