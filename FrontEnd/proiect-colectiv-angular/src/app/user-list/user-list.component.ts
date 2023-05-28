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
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'teamId'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMembers().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    }

    );
  }
}
