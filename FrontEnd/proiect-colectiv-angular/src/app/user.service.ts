import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginErrorComponent } from './login-error/login-error.component';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser = new BehaviorSubject<User>({} as any);
  readonly currentUser = this._currentUser.asObservable();

  private url = 'http://localhost:8080'; // Change to your API url

<<<<<<< Updated upstream
  constructor(private http: HttpClient, private router: Router) { }

  login(userData: { username: string; email: string; password: string; role: string; teamid: number; }) {
    return this.http.post<User>(`${this.url}/users/login`, userData).pipe(
      tap(user => {
        this._currentUser.next(user);
=======
  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {
    // Retrieve user data from localStorage on service initialization
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this._currentUser.next(JSON.parse(storedUser));
    }
  }

  login(userData: { email: string; password: string }) {
    localStorage.removeItem('currentUser');
    console.log(localStorage.getItem('currentUser'));
    return this.http.post<any>(`${this.url}/users/login`, userData).pipe(
      tap(user => {
        if (user) {
          this._currentUser.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(localStorage.getItem('currentUser'));
        }
      }),
      catchError((error: any) => {
        if (error.status === 401) {
          this.dialog.open(LoginErrorComponent);
          return EMPTY;  // <-- return an Observable that completes immediately without emitting any value
        }
        return throwError(error); // <-- if error is not 401, rethrow the error
>>>>>>> Stashed changes
      })
    );
  }

  register(userData: { username: string; email: string; password: string; role: string; teamid: number; }) {
    return this.http.post<User>(`${this.url}/users/create`, userData).pipe(
      tap(user => {
        this._currentUser.next(user);
      })
    );
  }

  redirectToComponent1() {
    this.router.navigate(['/component1']);
  }

  redirectToComponent2() {
    this.router.navigate(['/component2']);
  }

  handleError(error: any) {
    console.error(error); // Do your error handling here
  }

  getMembers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/getAll`);
  }
}
