import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

   userDetail !: FormGroup;
   userObj : User = new User();
   userList : User[] = [];
  
   constructor(private formBuilder : FormBuilder, private userService : UserService){}
   ngOnInit(): void {

    this.getAllUser();

    this.userDetail = this.formBuilder.group({
      id : [''],
      username : [''],
      email : [''],
      password : [''],
      role : [''],
      teamid : ['']
    });
    
   }

   addUser(){
    console.log(this.userDetail);
    this.userObj.id = this.userDetail.value.id;
    this.userObj.username = this.userDetail.value.username;
    this.userObj.email = this.userDetail.value.email;
    this.userObj.password = this.userDetail.value.password;
    this.userObj.role = this.userDetail.value.role;
    this.userObj.teamid = this.userDetail.value.teamid;


    this.userService.addUser(this.userObj).subscribe(res => {
      console.log(res);
      this.getAllUser();
    }, err => {
      console.log(err);
    });
   }


   editUser(user : User){
      this.userDetail.controls['id'].setValue(user.id);
      this.userDetail.controls['username'].setValue(user.username);
      this.userDetail.controls['password'].setValue(user.password);
      this.userDetail.controls['role'].setValue(user.role);
    
   }


   updateUser(){
    this.userObj.id = this.userDetail.value.id;
    this.userObj.username = this.userDetail.value.username;
    this.userObj.email = this.userDetail.value.email;
    this.userObj.password = this.userDetail.value.password;
    this.userObj.role = this.userDetail.value.role;
   }

   getAllUser(){
    this.userService.getAllUser().subscribe(res => {
      this.userList = res;
    }, err => {
      console.log("error while fetching data.")
    });
   }
}
