import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent {

  user:any;
  constructor(private UserService: UserService) {
    this.user = UserService.currentUser.subscribe(user => this.user = user);
  }
}
