import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmWithoutChallengeComponent } from './alarm-without-challenge.component';

describe('AlarmWithoutChallengeComponent', () => {
  let component: AlarmWithoutChallengeComponent;
  let fixture: ComponentFixture<AlarmWithoutChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmWithoutChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmWithoutChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
