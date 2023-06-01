import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn: boolean = true;
  constructor(private UserService: UserService) {
    this.UserService.currentUser.subscribe(user => this.isLoggedIn = user.id !== undefined);
  }

  onSubmit(){
    this.isLoggedIn = false;
    this.UserService.logout();
    
  }
}
