import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import {User} from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() buttonName!: string;
  @Input() buttonAction!: Function;

  team!:Team;

  constructor(private UserService: UserService, private TeamService:TeamService) { }

  ngOnInit(): void {
    if (this.user && typeof this.user === 'object') {
      this.user.image = this.user.image || 'https://www.w3schools.com/howto/img_avatar.png';
      this.TeamService.getTeam(this.user.teamId).subscribe((team: Team) => {
        this.team = team;
      });
    }
  }
}
