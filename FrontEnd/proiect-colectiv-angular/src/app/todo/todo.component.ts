import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: { title: string, description: string, assignee: string }[] = [];
  assignees: string[] = ['Member1', 'Member2', 'Member3', 'Member4'];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  addTask(title: string, description: string, assignee: string) {
    if (title && description && assignee) {
      this.tasks.push({ title: title, description: description, assignee: assignee });
      this.changeDetector.detectChanges();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.changeDetector.detectChanges();
  }
}