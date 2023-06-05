import { Component } from '@angular/core';
import { filter, from, map, switchMap, tap, toArray } from 'rxjs';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { GradeService } from '../grade.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  tasks: Task[] = [];
  gradeOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private taskService: TaskService, private userService: UserService, private activityService: ActivityService, private teamService: TeamService, private gradeService: GradeService) { 
  }

  ngOnInit(): void {
    this.showCompletedTasks();
  }

  showCompletedTasks() {
    const teamid = this.userService.currentUserValue.teamId;

this.teamService.getTeam(teamid).pipe(
  tap(team => console.log('Retrieved team: ', team)), // Log the retrieved team
  switchMap(team => this.activityService.getTeamActivities(team.id)),
  tap(activities => console.log('Retrieved activities: ', activities)), // Log the retrieved activities
  switchMap(activities => from(activities)),
  tap(activity => console.log('Processing activity: ', activity)), // Log the activity being processed
  switchMap(activity => this.taskService.getTasks().pipe(
    switchMap(tasks => from(tasks)), // Convert the array of tasks to an Observable stream
    tap(task => console.log('Processing task: ', task)), // Log the task being processed
    filter(task => task.isCompleted && task.activity === activity.id), // Filter out uncompleted tasks and tasks not related to team activities
    toArray() // Collect all tasks back into a single array
  )),
).subscribe(filteredTasks => {
  this.tasks = filteredTasks; // Assign the filtered tasks
  console.log('Final filtered tasks: ', this.tasks); // Log the final filtered tasks
});



//console.log(this.tasks);

}

  sendFeedback(task: Task) {
    //update grade and feedback
    this.gradeService.updateGrade(task.id, task.grade, task.feedback).subscribe(
      (grade) => {
        console.log("Grade updated");
      }
    );
  }
}
