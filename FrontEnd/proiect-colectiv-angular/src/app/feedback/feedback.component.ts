import { Component } from '@angular/core';

interface Task {
  title: string;
  description: string;
  grade: number | null;
  feedback: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  tasks: Task[] = [];
  gradeOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    this.showCompletedTasks();
  }

  showCompletedTasks() {
    this.tasks = [
      { title: 'Completed Task 1', description: 'Description of Completed Task 1', grade: null, feedback: '' },
      { title: 'Completed Task 2', description: 'Description of Completed Task 2', grade: null, feedback: '' },
      { title: 'Completed Task 3', description: 'Description of Completed Task 3', grade: null, feedback: '' },
      { title: 'Completed Task 3', description: 'Description of Completed Task 3', grade: null, feedback: '' },
      { title: 'Completed Task 3', description: 'Description of Completed Task 3', grade: null, feedback: '' },
      { title: 'Completed Task 3', description: 'Description of Completed Task 3', grade: null, feedback: '' },
      { title: 'Completed Task 3', description: 'Description of Completed Task 3', grade: null, feedback: '' }
    ];
  }

  sendFeedback(task: Task) {
    // Implement your logic to send the grade and feedback to the member or team leader
    console.log('Sending feedback for task:', task);
  }
}
