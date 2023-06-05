import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { switchMap, mapTo, tap } from 'rxjs/operators';
import { TaskService } from './task.service';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
    

    private url = 'http://localhost:8080';

    constructor(private http: HttpClient, private taskService: TaskService) { }

    /*createActivity(activity: Activity): Observable<Activity> {
      return this.http.post<Activity>(`${this.url}/activities/create`, activity);
    }*/

    deleteActivity(activityId: number): Observable<any> {
      return this.http.delete(`${this.url}/activities/delete/${activityId}`);
    }

    // function to get team activities
getTeamActivities(teamId: number): Observable<Activity[]> {
  return this.http.get<Activity[]>(`${this.url}/teams/${teamId}/activities`);
}

createActivityAndAddToTeam(teamId: number, newActivity: Activity): Observable<Activity> {
  return this.http.post<Activity>(`${this.url}/activities/create`, newActivity).pipe(
    tap((createdActivity: Activity) => {
      if (newActivity.tasks && newActivity.tasks.length > 0) {
        newActivity.tasks.forEach(task => {
          task.activityId = createdActivity.id;
          this.taskService.saveTask(task).subscribe();
        });
      }
    })
  );
}

addTaskToActivity(activityId:number, taskId:number){
  console.log("in service, activityId: " + activityId + " taskId: " + taskId);
  const requestBody = { taskId: taskId }; // Create an object with the taskId property
  return this.http.patch(`${this.url}/activities/${activityId}/addTask`, requestBody);
}
}
