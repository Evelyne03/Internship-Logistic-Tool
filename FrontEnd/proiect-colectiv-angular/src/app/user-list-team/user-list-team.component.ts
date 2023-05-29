import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-team',
  templateUrl: './user-list-team.component.html',
  styleUrls: ['./user-list-team.component.css']
})
export class UserListTeamComponent implements OnInit{
  users: User[] = [];

    constructor(private userService: UserService, private teamService: TeamService){}

    ngOnInit(): void {
        this.refreshComponent();
    }

    refreshComponent(){
      const currentUser = this.userService.currentUserValue;
      const teamId= currentUser.teamId;
      this.teamService.getTeamMembers(teamId).subscribe((users: User[]) =>{
          this.users = users;
        })
    }
}
