import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { UserListTeamComponent } from '../user-list-team/user-list-team.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {
  @Input() team!: Team;
  @Output() mentorAssigned = new EventEmitter<void>();

  constructor(private list: UserListComponent,private TeamService: TeamService,private UserService: UserService, private list2 : UserListTeamComponent) { }

  ngOnInit(): void {

  }

  /*mentorTeam(){
    const userId = this.UserService.currentUserValue.id;
    this.list2.hasTeam = true;
    this.TeamService.setMentor(this.team.id,userId).subscribe(
      (data) => {
        this.UserService.currentUserValue.teamId = this.team.id;
        this.mentorAssigned.emit();
        console.log(data);
        window.location.reload();
      }
    )
  }*/

  mentorTeam(): void {
    const userId = this.UserService.currentUserValue.id;
    this.TeamService.setMentor(this.team.id, userId).subscribe(
      (data) => {
        this.UserService.setCurrentUserTeamId(this.team.id);
        this.mentorAssigned.emit();
        console.log(data);
      }
    );
    this.UserService.currentUserValue.teamId = this.team.id;
    this.list2.refreshComponent();
  }
  


}
