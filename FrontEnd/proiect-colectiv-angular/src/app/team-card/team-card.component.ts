import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
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

  constructor(private list: UserListComponent,private TeamService: TeamService,private UserService: UserService) { }

  ngOnInit(): void {

  }

  mentorTeam(){
    const userId = this.UserService.currentUserValue.id;
    this.TeamService.setMentor(this.team.id,userId).subscribe(
      (data) => {
        this.mentorAssigned.emit();
        console.log(data);
        window.location.reload();
      }
    )
  }

}
