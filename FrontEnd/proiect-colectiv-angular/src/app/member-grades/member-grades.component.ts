import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Grade } from '../grade';
import { TaskService } from '../task.service';
import { GradeService } from '../grade.service';
import { UserService } from '../user.service';


@Component({
    selector: 'app-member-grades',
    templateUrl: './member-grades.component.html',
    styleUrls: ['./member-grades.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];

  grades: Grade[] = [];

  constructor(private taskService: TaskService, private gradesService: GradeService, private userService: UserService){}

  ngOnInit(): void {
    this.taskService.getMemberTasks(this.userService.currentUserValue.id).subscribe((tasks) => {
      this.tasks = tasks
      this.tasks.forEach(task => {
        this.gradesService.getGradeByTask(task.id).subscribe(grade => {
          this.grades = this.grades.concat(grade);
          console.log(this.grades);
        });
      });
    })
  }

  completeTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = true;
    }
    this.taskService.completeTask(taskId).subscribe();
  }


  getGrade(taskId: number): number | undefined {
    const grade = this.grades.find(g => g.task === taskId);
    return grade && grade.grade !== -1 ? grade.grade : undefined;
  }

  getFeedback(taskId: number): string | undefined {
    const grade = this.grades.find(g => g.task === taskId);
    return grade ? grade.feedback : undefined;
  }
}
