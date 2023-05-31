import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.UserService.login(this.loginForm.value).subscribe(
      (user) => {
        if (user.role === 'mentor') {
          this.router.navigate(['/mentor/myData']);
        } else if (user.role === 'member') {
          this.router.navigate(['/member/myData']);
        }
      }
    )
  }

}
