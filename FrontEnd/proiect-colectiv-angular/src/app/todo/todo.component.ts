import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { TaskService } from '../task.service'; // Import TaskService
import { Task } from '../task';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks:Task[] = [];
  @Input() activityId!: number;
  assignees: string[] = ['Member1', 'Member2', 'Member3', 'Member4'];

  // Include TaskService in your constructor
  constructor(private changeDetector: ChangeDetectorRef, private taskService: TaskService, private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  addTask(taskTitle: string, taskDescription: string): void {
    const newTask: Task = {
      id: 0, // This is a placeholder.
      name: taskTitle,
      description: taskDescription,
      isCompleted: false,
      activity: this.activityId, // use the activityId here
      student_id: 2 // This is a placeholder.
    };
    //console.log(this.activityId);
    console.log(newTask);
    this.taskService.saveTask(newTask).subscribe((createdTask) => {
      console.log(createdTask);
      this.tasks.push(newTask);
    });

  }
  
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.changeDetector.detectChanges();
  }
}
