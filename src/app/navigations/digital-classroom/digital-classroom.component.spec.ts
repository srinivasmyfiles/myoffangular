import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClassroomComponent } from './digital-classroom.component';

describe('DigitalClassroomComponent', () => {
  let component: DigitalClassroomComponent;
  let fixture: ComponentFixture<DigitalClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
