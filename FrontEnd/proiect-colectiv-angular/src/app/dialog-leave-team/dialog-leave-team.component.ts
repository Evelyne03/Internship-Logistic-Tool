import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { TeamService } from '../team.service';
import { Team } from '../team';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-leave-team',
  templateUrl: './dialog-leave-team.component.html',
  styleUrls: ['./dialog-leave-team.component.css']
})
export class DialogLeaveTeamComponent {
  user!: User;
  team!: Team;

  constructor(public dialogRef: MatDialogRef<DialogLeaveTeamComponent>, private userService: UserService, private TeamService: TeamService) { }

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
    let userToRemove = this.user.id;
    let memberIndex = this.team['members'].findIndex(member => member['id'] === userToRemove);

    if (memberIndex !== -1) {
      this.team['members'].splice(memberIndex, 1);
    }
    console.log(this.team);
    this.user.teamId = 0;

    this.dialogRef.close();
  }
}
