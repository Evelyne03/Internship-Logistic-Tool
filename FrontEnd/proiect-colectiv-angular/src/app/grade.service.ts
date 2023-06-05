import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from './grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private url = 'http://localhost:8080'; // Change to your API url
  constructor(private http: HttpClient, private router: Router) {}

  getGradeByTask(id: number) {
    return this.http.get<Grade>(`${this.url}/grades/task/${id}`);
  }
}
