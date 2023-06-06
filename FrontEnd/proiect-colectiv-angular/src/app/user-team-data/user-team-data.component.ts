import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { MatDialog } from '@angular/material/dialog';
import { DialogLeaveTeamComponent } from '../dialog-leave-team/dialog-leave-team.component';

@Component({
  selector: 'app-user-team-data',
  templateUrl: './user-team-data.component.html',
  styleUrls: ['./user-team-data.component.css'],
})
export class UserTeamDataComponent {
  user!: User;
  team!: Team;

  constructor(private matDialog: MatDialog, private userService: UserService, private TeamService: TeamService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      this.TeamService.getTeam(this.user.teamId).subscribe((team: Team) => {
        this.team = team;
      });


    })
  }

  confirmLeaveTeam(): void {
    this.matDialog.open(DialogLeaveTeamComponent);
  }
}