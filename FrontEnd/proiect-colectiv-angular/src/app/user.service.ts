import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser = new BehaviorSubject<User>({} as any);
  readonly currentUser = this._currentUser.asObservable();

  private url = 'http://localhost:8080'; // Change to your API url

  constructor(private http: HttpClient, private router: Router) {
    // Retrieve user data from localStorage on service initialization
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this._currentUser.next(JSON.parse(storedUser));
    }
  }

  login(userData: { email: string; password: string }) {
    return this.http.post<any>(`${this.url}/users/login`, userData).pipe(
      tap(user => {
        this._currentUser.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    );
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.url}/users/delete/${userId}`);
  }

  get currentUserValue(): User {
    return this._currentUser.value;
  }

  register(userData: { username: string; email: string; password: string; role: string; teamId: number; }) {
    return this.http.post<User>(`${this.url}/users/create`, userData).pipe(
      tap(user => {
        this._currentUser.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
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

  logout() {
    this._currentUser.next({} as any);
    localStorage.removeItem('currentUser'); // Remove user data from localStorage
  }
}
