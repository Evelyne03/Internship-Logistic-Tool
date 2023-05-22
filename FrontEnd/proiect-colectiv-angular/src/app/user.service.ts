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
  
    constructor(private http: HttpClient, private router: Router) {}
  
    login(userData: { username: string; email: string; password: string; role: string; teamid: number;}) {
      return this.http.post<User>(`${this.url}/users/login`, userData).pipe(
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

    getMembers():Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/users/getAll`);
    }
}
