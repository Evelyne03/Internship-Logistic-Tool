import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MentorComponent } from './mentor/mentor.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserService } from './user.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListTeamComponent } from './user-list-team/user-list-team.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { TeamleaderComponent } from './teamleader/teamleader.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivityComponent } from './activity/activity.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';



import { TeamCardComponent } from './team-card/team-card.component';
import { TeamService } from './team.service';
import { TeamDataComponent } from './team-data/team-data.component';
import { CommonModule } from '@angular/common';
import { TeamGradesComponent } from './team-grades/team-grades.component';



@NgModule({
  declarations: [
    LoginComponent,
    MentorComponent,
    MemberComponent,
    Component1Component,
    Component2Component,
    AppComponent,
    LoginComponent,
    MentorComponent,
    MemberComponent,
    DashboardComponent,
    UserDataComponent,
    UserListComponent,
    UserCardComponent,
    UserListTeamComponent,
    RegisterComponent,
    TodoComponent,
    TeamleaderComponent,
    FeedbackComponent,
    AppComponent,
    ActivityComponent,
    TodoComponent,
    TeamCardComponent,
    TeamCardComponent,
    TeamDataComponent,
    TeamGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule, 
    MatTableModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CdkVirtualScrollViewport,
    ScrollingModule,
    CommonModule
  ],
  providers: [
    UserListComponent,
    FormsModule 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
