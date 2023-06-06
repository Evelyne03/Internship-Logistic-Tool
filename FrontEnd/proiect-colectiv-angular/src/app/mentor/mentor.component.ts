import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit{
  showAddActivity: boolean = false;
  tasks: Task[] = [];
  user: User | undefined;
  
  constructor(private userService: UserService) {}
  toggleAddActivity() {
    this.showAddActivity = !this.showAddActivity;
  }

  addActivity() {
    // Implement your logic to add a new task or navigate to a different page for adding an activity
  }

  ngOnInit(): void {
    this.user = this.userService.currentUserValue;
  }
  
}

interface Task {
  title: string;
  description: string;
  grade: number | null;
  feedback: string;
}
