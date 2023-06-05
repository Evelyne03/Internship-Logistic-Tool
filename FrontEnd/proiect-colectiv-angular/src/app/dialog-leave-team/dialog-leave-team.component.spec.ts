import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeaveTeamComponent } from './dialog-leave-team.component';

describe('DialogLeaveTeamComponent', () => {
  let component: DialogLeaveTeamComponent;
  let fixture: ComponentFixture<DialogLeaveTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLeaveTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLeaveTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
