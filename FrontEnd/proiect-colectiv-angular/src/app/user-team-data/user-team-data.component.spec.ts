import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeamDataComponent } from './user-team-data.component';

describe('UserTeamDataComponent', () => {
  let component: UserTeamDataComponent;
  let fixture: ComponentFixture<UserTeamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTeamDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTeamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
