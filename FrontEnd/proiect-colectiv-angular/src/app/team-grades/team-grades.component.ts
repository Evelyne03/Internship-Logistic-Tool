import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Grade } from '../grade';
import { GradeService } from '../grade.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-grades',
  templateUrl: './team-grades.component.html',
  styleUrls: ['./team-grades.component.css']
})
export class TeamGradesComponent implements OnInit {
  activities: Activity[] = [];
  tasks: Task[] = [];
  grades: Grade[] = [];
  users: User[] = [];

  constructor(
    private userService: UserService,
    private gradeService: GradeService,
    private taskService: TaskService,
    private activityService: ActivityService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    const teamId = this.userService.currentUserValue.teamId;
    this.activityService.getTeamActivities(teamId).subscribe(activities => {
      this.activities = activities;
      // Fetch tasks data for each activity
      this.activities.forEach(activity => {
        this.taskService.getTasksByActivity(activity.id).subscribe(tasks => {
          this.tasks = this.tasks.concat(tasks);
          this.tasks.forEach(task => {
            this.gradeService.getGradeByTask(task.id).subscribe(grade => {
              this.grades = this.grades.concat(grade);
            });
          });
        });
      });
      // Fetch users data for the team
      this.teamService.getTeamUsers(teamId).subscribe(users => {
        this.users = users;
      });
    });
  }

  getTasksByActivity(activityId: number): Task[] {
    return this.tasks.filter(task => task.activity === activityId);
  }

  getUserById(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }

  getTaskGrade(taskId: number): string {
    const grade = this.grades.find(grade => grade.task === taskId);
    return grade?.grade && grade.grade !== -1 ? grade.grade.toString() : 'Not graded yet!';
  }

  getTaskFeedback(taskId: number): string {
    const grade = this.grades.find(grade => grade.task === taskId);
    return grade?.feedback ? grade.feedback : 'No feedback yet!';
  }

  getNameByStudentId(studentId: number): string {
    const user = this.users.find(user => user.id === studentId);
    return user?.username ? user.username : 'No name';
  }

  getAverageGradeForActivity(activityId: number): string {
    const tasks = this.getTasksByActivity(activityId);
    let sum = 0;
    let count = 0;
    tasks.forEach(task => {
      const grade = this.grades.find(grade => grade.task === task.id);
      if (grade && grade.grade !== -1) {
        sum += grade.grade;
        count++;
      }
    });
    return count > 0 ? (sum / count).toFixed(2) : 'Not graded yet!';
  }
}
