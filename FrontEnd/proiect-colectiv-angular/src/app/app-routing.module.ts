import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MentorComponent } from './mentor/mentor.component';
import { MemberComponent } from './member/member.component';
import { TeamleaderComponent } from './teamleader/teamleader.component';


import { UserGradesComponent } from './user-grades/user-grades.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListTeamComponent } from './user-list-team/user-list-team.component';
import { TodoComponent } from './todo/todo.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'component1', component: Component1Component, pathMatch: 'full' },
      { path: 'component2', component: Component2Component, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'mentor', component: MentorComponent, pathMatch: 'full' },
      { path: 'tasks', component: TodoComponent, pathMatch: 'full' },
      {
        path: 'mentor',
        component: MentorComponent,
        children: [
          { path: '', redirectTo: 'myData', pathMatch: 'full' },
          { path: 'myData', component: UserDataComponent, pathMatch: 'full' },
          { path: 'allStudents', component: UserListComponent, pathMatch: 'full' },
          { path: 'myStudents', component: UserListTeamComponent, pathMatch: 'full' },
          { path: 'activity', component: ActivityComponent, pathMatch: 'full'},
          { path: 'tasks', component: TodoComponent, pathMatch: 'full'}
          

        ]
      },
      { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      {
        path: 'mentor',
        component: MentorComponent,
        children: [
          { path: '', redirectTo: 'myData', pathMatch: 'full' },
          { path: 'myData', component: UserDataComponent, pathMatch: 'full' },
          { path: 'allStudents', component: UserListComponent, pathMatch: 'full' }
        ]
      },
      { path: 'member', component: MemberComponent, pathMatch: 'full' },
      {
        path: 'member',
        component: MemberComponent,
        children: [
          { path: '', redirectTo: 'myData', pathMatch: 'full' },
          { path: 'myData', component: UserDataComponent, pathMatch: 'full' },
          { path: 'myGrades', component: UserGradesComponent, pathMatch: 'full' },
          { path: 'myAttendance', component: UserAttendanceComponent, pathMatch: 'full' },
          { path: 'myFeedback', component: UserFeedbackComponent, },
        ]
      },
      { path: 'teamleader', component: TeamleaderComponent, pathMatch: 'full' },
      {
        path: 'teamleader',
        component: TeamleaderComponent,
        children: [
          { path: '', redirectTo: 'myData', pathMatch: 'full' },
          { path: 'myData', component: UserDataComponent, pathMatch: 'full' },
          //{ path: 'myGrades', component: UserGradesComponent, pathMatch: 'full' },
          //{ path: 'myAttendance', component: UserAttendanceComponent, pathMatch: 'full' },
          //{ path: 'myFeedback', component: UserFeedbackComponent, },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
