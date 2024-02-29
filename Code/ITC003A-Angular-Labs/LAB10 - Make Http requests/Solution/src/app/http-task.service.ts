import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Task, Priority } from "./task";
import { TaskService } from "./task.service";

@Injectable()
export class HttpTaskService extends TaskService {

    private baseUrl = environment.baseUrl

    constructor(private http: HttpClient) {
        super()
    }

    searchTasks(keyword: string = ''): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl).pipe(
            map(tasks=>tasks.filter(task=>task.description.includes(keyword))),
            catchError(this.handleError)
        )
    }
    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl)
    }
    addTask(task: Task): Observable<any> {
        return this.http.post(this.baseUrl, task)
    }
    removeTask(task: Task): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${task.id}`)
    }
    getDefaultPriority(): Priority {
        return Priority.Normal
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return of(error.json() || "Server error");
     }

}