import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  teams: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  hasTeam: boolean = false;
  
  constructor(private userService: UserService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.refreshComponent();
  }

  refreshComponent() {
    const currentUser = this.userService.currentUserValue;
    console.log('Has team: ', this.hasTeam);
    if(currentUser){

      console.log('Current user:', currentUser);
      console.log('Current user team ID:', currentUser.teamId);

      this.hasTeam = currentUser.teamId != 0;

    if(this.hasTeam) {
      this.teamService.getTeamMembers(currentUser.teamId).subscribe((users: User[]) => {
        this.users.next(users);
        console.log('Users: ', this.users);
      });
    } else {
      this.teamService.getAllTeamsNoMentor().subscribe((teams: Team[]) => {
        this.teams.next(teams);
        console.log('Teams: ', this.teams);
      });
    }
    }
    else{
      console.log("Current user is not defined");
    }
    
  }
}
