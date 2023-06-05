import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private url = 'http://localhost:8080/tasks'

  saveTask(task: Task): Observable<Task>{
    return this.http.post<Task>('http://localhost:8080/tasks/create', task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.url}/tasks/${id}`);
  }
  constructor(private http: HttpClient, private router: Router) {}

  getTasksByActivity(id: number) {
    return this.http.get<Task[]>(`${this.url}/tasks/${id}`);  
  }
}
