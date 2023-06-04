import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit{
  activityForm: FormGroup;
  peopleList: string[] = ['Person 1', 'Person 2', 'Person 3']; 
  tasks: Activity[] = [];

  constructor(private fb: FormBuilder,
              private teamService: TeamService,
              private userService: UserService,
              private activityService: ActivityService) { 
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]  
    });
  }

  /*ngOnInit(): void {
    const currentUserTeamId = this.userService.currentUserValue.teamId;

    if(currentUserTeamId){
      this.teamService.getTeamUsers(currentUserTeamId).subscribe(
        (users:User[]) =>{
          this.peopleList = users.map(user =>user.username);
        }
      );
    }else
    {
      console.log("No team id");
    }
  }
    addActivity() {
      if (this.activityForm.valid) {
        const newActivity: Activity = {
          id: 0, // This is a placeholder.
          name: this.activityForm.value.name,
          description: this.activityForm.value.description,
          team_id: this.userService.currentUserValue.teamId // Add the team id here
        };
    
        this.activityForm.reset();
        
        // call service to save to backend
        this.activityService.createActivity(newActivity).subscribe(
          response => {
            // use the id from the response here
            newActivity.id = response.id;
            this.tasks.push(newActivity);
          },
          error => {
            // handle error here
            console.error(error);
          }
        );
      }
    }*/
    
    ngOnInit(): void {
      const currentUserTeamId = this.userService.currentUserValue.teamId;
    
      if(currentUserTeamId){
        this.teamService.getTeamUsers(currentUserTeamId).subscribe(
          (users:User[]) =>{
            this.peopleList = users.map(user => user.username);
          }
        );
    
        // get all activities for the current user's team
        this.activityService.getTeamActivities(currentUserTeamId).subscribe(
          (activities: Activity[]) => {
            this.tasks = activities;
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.log("No team id");
      }
    }
    
    addActivity() {
      if (this.activityForm.valid) {
        const newActivity: Activity = {
          id: 0, // This is a placeholder.
          name: this.activityForm.value.name,
          description: this.activityForm.value.description,
          team_id: this.userService.currentUserValue.teamId // Add the team id here
        };
    
        this.activityForm.reset();
        
        // call service to save to backend
        this.activityService.createActivityAndAddToTeam(newActivity.team_id, newActivity).subscribe(
          createdActivity => {
            this.tasks.push(createdActivity);
          },
          error => {
            // handle error here
            console.error(error);
          }
        );
      }
    }
    


    deleteActivity(index: number) {
  const activityId = this.tasks[index].id;
  this.tasks.splice(index, 1);
  
  this.activityService.deleteActivity(activityId).subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.error(error);
    }
  );
}


  }