import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTeamComponent } from './user-list-team.component';

describe('UserListTeamComponent', () => {
  let component: UserListTeamComponent;
  let fixture: ComponentFixture<UserListTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
