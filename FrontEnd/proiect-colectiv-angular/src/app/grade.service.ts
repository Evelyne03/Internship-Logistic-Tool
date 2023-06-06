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

  updateGrade(id: number, grade: number, feedback: string) {
    const requestBody = { grade: grade, feedback: feedback }; // Create an object with the grade and feedback properties
    return this.http.patch(`${this.url}/grades/update/${id}`, requestBody);
  }

  getGradeById(id: number) {
    return this.http.get<Grade>(`${this.url}/grades/${id}`);
  }

  asignGrade(id: number, studentid: number, mentorid:number){
    const requestBody = { studentId: studentid, mentorId: mentorid }; // Create an object with the grade and feedback properties
    return this.http.patch(`${this.url}/grades/${id}/assign`, requestBody);
  }
}
