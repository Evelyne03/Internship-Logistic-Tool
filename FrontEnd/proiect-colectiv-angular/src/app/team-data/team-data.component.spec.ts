import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDataComponent } from './team-data.component';

describe('TeamCardComponent', () => {
  let component: TeamDataComponent;
  let fixture: ComponentFixture<TeamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});