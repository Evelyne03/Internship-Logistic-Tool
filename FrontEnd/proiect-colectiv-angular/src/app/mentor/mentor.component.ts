import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent {
  showAddActivity: boolean = false;
  tasks: Task[] = [];
  

  toggleAddActivity() {
    this.showAddActivity = !this.showAddActivity;
  }

  addActivity() {
    // Implement your logic to add a new task or navigate to a different page for adding an activity
  }

  
}

interface Task {
  title: string;
  description: string;
  grade: number | null;
  feedback: string;
}
