import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css']
})


export class TeamDataComponent implements OnInit {

  team: Team | undefined;
  members: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);;
  teamName: string = "";
  availableMembers: User[] = [];
  selectedMember: String | undefined;
  buttonName: string = "Remove";


  constructor(private teamService: TeamService, private userService: UserService) { }

  ngOnInit(): void {
    this.teamService.getTeam(this.userService.currentUserValue.teamId).subscribe((team) => { this.team = team; this.teamName = team.name;});
    this.teamService.getAllAvailableMembers().subscribe(members => this.availableMembers = members);
    this.teamService.getTeamMembers(this.userService.currentUserValue.teamId).subscribe(members => this.members.next(members));
  }

  updateTeamName() {
    this.teamService.updateTeamName(this.userService.currentUserValue.teamId, this.teamName).subscribe();
  }

  refreshMembers() {
    this.teamService.getTeamMembers(this.userService.currentUserValue.teamId).subscribe(members => this.members.next(members));
  }

  refreshAvailableMembers() {
    this.teamService.getAllAvailableMembers().subscribe(members => this.availableMembers = members);
  }

  addMember() {
    this.teamService.addUserToTeam( this.userService.currentUserValue.teamId, this.selectedMember).subscribe(
      () => {
        this.refreshMembers();
        this.refreshAvailableMembers();
      }
    );
  }

  removeMember(userId: number) {
    this.teamService.removeUserFromTeam(userId).subscribe(
      () => {
        this.refreshMembers();
        this.refreshAvailableMembers();
      }
    );
  }
}
