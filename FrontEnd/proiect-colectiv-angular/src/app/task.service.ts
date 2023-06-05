import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { Router } from '@angular/router';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private url = 'http://localhost:8080/tasks'
  constructor(private http:HttpClient) { }

  saveTask(task: Task): Observable<Task>{
    return this.http.post<Task>('http://localhost:8080/tasks/create', task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.url}/tasks/${id}`);
  }
  private url = 'http://localhost:8080'; // Change to your API url
  constructor(private http: HttpClient, private router: Router) {}

  getTasksByActivity(id: number) {
    return this.http.get<Task[]>(`${this.url}/activities/${id}/tasks`);  
  }
}
