import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService){}

    ngOnInit(): void {
        this.refreshComponent();
    }

    refreshComponent(){
      this.userService.getMembers().subscribe((users: User[]) =>{
          this.users = users;
        })
    }
  }
