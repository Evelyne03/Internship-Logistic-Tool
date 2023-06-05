import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-leave-team',
  templateUrl: './dialog-leave-team.component.html',
  styleUrls: ['./dialog-leave-team.component.css']
})
export class DialogLeaveTeamComponent {
  user!: User;
  team!: Team;

  constructor(private router: Router, public dialogRef: MatDialogRef<DialogLeaveTeamComponent>, private userService: UserService, private TeamService: TeamService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      this.TeamService.getTeam(this.user.teamId).subscribe((team: Team) => {
        this.team = team;
      });


    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.TeamService.removeUserFromTeam(this.user.id).subscribe(() => {
      this.user.teamId = 0;
    });
    this.dialogRef.close();
  }
}