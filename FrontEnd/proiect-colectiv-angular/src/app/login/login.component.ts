import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const user: User = this.loginForm.value;
    this.UserService.login(user).subscribe(
        (data: User) => {
            if (data.role === 'mentor') {
                this.router.navigate(['/mentor/myData']);
            } else if(data.role === 'member') {
                this.router.navigate(['/member/myData']);
            }
        },
        error => {
            // Log the error message
            console.error('Invalid username or password');
        }
    );
}

}
