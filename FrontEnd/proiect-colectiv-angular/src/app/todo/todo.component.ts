import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { TaskService } from '../task.service'; // Import TaskService
import { Task } from '../task';
import { ActivityService } from '../activity.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks:Task[] = [];
  @Input() activityId!: number;
  assignees: { id: number, name: string }[] = [];
  selectedAssignee: number = 0;

  // Include TaskService in your constructor
  constructor(private changeDetector: ChangeDetectorRef, private taskService: TaskService, private activityService: ActivityService, private userService:UserService, private teamService: TeamService) { }

  ngOnInit(): void {

    this.teamService.getTeamUsers(this.userService.currentUserValue.teamId).subscribe(
      (users:User[]) =>{
        this.assignees = users.filter(user => user.teamId === this.userService.currentUserValue.teamId).map(user => ({ id: user.id, name: user.username })); // map to an object with id and name
      }
    );
      
    console.log("Current user team id:",this.userService.currentUserValue.teamId);
    this.taskService.getTasksByActivity(this.activityId).subscribe(
      (tasks: Task[]) => {
        console.log("Here are the:", tasks);
        this.tasks = tasks;
      },
      error => {
        console.error(error);
      }
    );
  }

  addTask(taskTitle: string, taskDescription: string, asigneeId: number): void {
    console.log(this.selectedAssignee);
    if(this.selectedAssignee === 0){
      return;
    }
    const newTask: Task = {
      id: 0, // This is a placeholder.
      name: taskTitle,
      description: taskDescription,
      isCompleted: false,
      activity: this.activityId, // use the activityId here
      studentId: this.selectedAssignee // This is a placeholder.
      
    };
    //console.log(this.activityId);
    console.log(newTask);
    this.taskService.saveTask(newTask).subscribe((createdTask) => {
      console.log(createdTask);
      this.tasks.push(createdTask);
    });

  }
  
  deleteTask(index: number): void {
    const taskId = this.tasks[index].id;
    console.log(taskId);
    this.taskService.deleteTask(taskId).subscribe(
      response => {
        console.log(response);
        this.tasks.splice(index, 1);
        this.changeDetector.detectChanges();
      },
      error => {
        console.error(error);
      }
    );
  }
}