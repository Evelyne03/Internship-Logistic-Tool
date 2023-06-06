import { Component } from '@angular/core';
import { filter, from, map, switchMap, tap, toArray } from 'rxjs';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { GradeService } from '../grade.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';
import { Grade } from '../grade';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  tasks: Task[] = [];
  grades: Grade[] = [];
  gradeOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private taskService: TaskService, private userService: UserService, private activityService: ActivityService, private teamService: TeamService, private gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.showCompletedTasks();
  }

  showCompletedTasks() {
    const teamId = this.userService.currentUserValue.teamId;
    this.activityService.getTeamActivities(teamId).subscribe(
      (activities) => {
        activities.forEach((activity) => {
          this.taskService.getTasksByActivity(activity.id).subscribe(
            (tasks) => {
              tasks.forEach((task) => {
                this.gradeService.getGradeByTask(task.id).subscribe(
                  (grade) => {
                    if (task.isCompleted) {
                      this.tasks.push(task);
                      this.grades.push(grade);
                    }
                    console.log(this.tasks);
                  }
                )
              })
            }
          )
        });
      }
    )
  }

  getGradeByTaskId(taskId: number) {
    return this.grades.find(grade => grade.task == taskId)?.grade.toString() || "0";
  }

  getFeedbackByTaskId(taskId: number) {
    return this.grades.find(grade => grade.task == taskId)?.feedback || "";
  }

  sendFeedback(task: Task) {
    //update grade and feedback
    this.gradeService.updateGrade(task.id, Number.parseInt(this.getGradeByTaskId(task.id)), this.getFeedbackByTaskId(task.id)).subscribe(
      (grade) => {
        console.log("Grade updated"); 
      }
    );
  }
}
