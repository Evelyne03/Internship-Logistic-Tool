import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  addUserURL : string;
  getUserURL : string;

  constructor(private http : HttpClient) {
    this.addUserURL = 'http://localhost:8080/users/create';
    this.getUserURL = 'http://localhost:8080/users/getAll';
   }

   addUser(user : User): Observable<User>{
    return this.http.post<User>(this.addUserURL, user);
   }

   getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(this.getUserURL);
   }
  }
