import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})


export class UserDataComponent implements OnInit{
  user!: User;
  team!: Team;

  constructor(private userService: UserService, private TeamService: TeamService) {}
  
   ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      this.user.image = 'https://www.w3schools.com/howto/img_avatar.png';

      this.TeamService.getTeam(this.user.teamId).subscribe((team: Team) => {
        this.team = team;
      });

    })
  }
}
