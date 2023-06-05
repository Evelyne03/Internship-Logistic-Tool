import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { switchMap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.url}/activities/create`, activity);
  }

  deleteActivity(activityId: number): Observable<any> {
    return this.http.delete(`${this.url}/activities/delete/${activityId}`);
  }

  // function to get team activities
  getTeamActivities(teamId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.url}/teams/${teamId}/activities`);
  }

  // function to create an activity and add it to the team
  createActivityAndAddToTeam(teamId: number, activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.url}/activities/create`, activity).pipe(
      switchMap(createdActivity => {
        // use the id from the created activity here
        activity.id = createdActivity.id;
        return this.http.patch(`${this.url}/teams/${teamId}/addActivity`, { activityId: createdActivity.id }).pipe(
          mapTo(createdActivity) // return the created activity
        );
      })
    );
  }


}
