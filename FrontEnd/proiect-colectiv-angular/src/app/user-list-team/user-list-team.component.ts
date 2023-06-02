import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-team',
  templateUrl: './user-list-team.component.html',
  styleUrls: ['./user-list-team.component.css']
})
export class UserListTeamComponent implements OnInit {
  users: User[] = [];
  teams: Team[] = [];
  hasTeam: boolean = false;
  
  constructor(private userService: UserService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.refreshComponent();
  }

  refreshComponent() {
    const currentUser = this.userService.currentUserValue;
    if(currentUser){

      console.log('Current user:', currentUser);
      console.log('Current user team ID:', currentUser.teamId);

      this.hasTeam = currentUser.teamId != 0;

    if(this.hasTeam) {
      this.teamService.getTeamMembers(currentUser.teamId).subscribe((users: User[]) => {
        this.users = users;
        console.log('Users: ', this.users);
      });
    } else {
      this.teamService.getAllTeamsNoMentor().subscribe((teams: Team[]) => {
        this.teams = teams;
        console.log('Teams: ', this.teams);
      });
    }
    }
    else{
      console.log("Current user is not defined");
    }
    
  }
}
