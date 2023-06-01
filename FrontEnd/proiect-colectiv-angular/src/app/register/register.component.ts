import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const user: User = this.registerForm.value;
    this.UserService.register(user).subscribe(
      (data: User) => {
        if (data.role === 'mentor') {
          this.router.navigate(['/mentor/myData']);
        } else if (data.role === 'member') {
          this.router.navigate(['/member/myData']);
        }
        else if (data.role === 'teamleader') {
          this.router.navigate(['/teamleader/myData']);
        }
      },
      error => {
        // Log the error message
        console.error('Invalid username or password');
      }
    );
  }

}
