import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmWithChallengeComponent } from './alarm-with-challenge.component';

describe('AlarmWithChallengeComponent', () => {
  let component: AlarmWithChallengeComponent;
  let fixture: ComponentFixture<AlarmWithChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmWithChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmWithChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
