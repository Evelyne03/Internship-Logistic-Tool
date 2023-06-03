import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';

export class Task {
    constructor(public name: string, public person: string, public description: string) { }   
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent {
  activityForm: FormGroup;
  peopleList: string[] = ['Person 1', 'Person 2', 'Person 3']; 
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) {
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      person: ['', Validators.required],
      description: ['', Validators.required]  
    });
  }

  addActivity() {
    if (this.activityForm.valid) {
      this.tasks.push(new Task(
        this.activityForm.value.name,
        this.activityForm.value.person,
        this.activityForm.value.description  
      ));
      this.activityForm.reset();
    }
  }
  
  deleteActivity(index: number) {
    this.tasks.splice(index, 1);
  }
}
