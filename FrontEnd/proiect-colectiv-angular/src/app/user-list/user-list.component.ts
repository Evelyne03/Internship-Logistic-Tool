import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[] = [];
    buttonName: string = "Delete";

    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.refreshComponent();
    }

    refreshComponent(){
      this.userService.getMembers().subscribe((users: User[]) =>{
          this.users = users;
        })
    }

    deleteUser(id : number) {
      this.userService.deleteUser(id).subscribe(() => {
        this.refreshComponent();
      });
    }


  }
