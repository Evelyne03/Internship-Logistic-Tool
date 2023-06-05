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
  //users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  //teams: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  users: User[] = [];
  teams: Team[] = [];
  hasTeam: boolean = false;
  buttonName: string = "Delete";
  
  constructor(private userService: UserService, private teamService: TeamService) {}

  ngOnInit(): void {
    this.refreshComponent();
  }

  refreshComponent() {
    const currentUser = this.userService.currentUserValue;
    if(currentUser){
      this.hasTeam = currentUser.teamId != 0;

    if(this.hasTeam) {
      this.teamService.getTeamUsers(currentUser.teamId).subscribe((users: User[]) => {
        this.users = users;
        console.log(users);
      });
    } else {
      this.teamService.getAllTeamsNoMentor().subscribe((teams: Team[]) => {
        this.teams = teams;
        console.log(this.teams);
      });
    }
    }
    else{
    }
    
  }

  deleteUser(id : number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.refreshComponent();
    });
  }
}
