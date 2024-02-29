import { Injectable } from "@angular/core";
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

    getAllTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task): Task[] {
        let _task = {
            ...task,
            id: this.generateId()
        } 
        return this.tasks = this.tasks.concat(_task);
    }

    removeTask(task: Task): Task[] {
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            return this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1));
        }
        return this.tasks;
    }

    getDefaultPriority(): Priority {
        return Priority.Normal
    }

    private generateId():number {
        return (Math.random()*100)+1
    }

}