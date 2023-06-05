import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private url = 'http://localhost:8080'; // Change to your API url
  constructor(private http: HttpClient, private router: Router) {}

  getTasksByActivity(id: number) {
    return this.http.get<Task[]>(`${this.url}/activities/${id}/tasks`);  
  }
}
