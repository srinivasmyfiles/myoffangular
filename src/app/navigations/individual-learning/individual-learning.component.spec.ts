import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLearningComponent } from './individual-learning.component';

describe('IndividualLearningComponent', () => {
  let component: IndividualLearningComponent;
  let fixture: ComponentFixture<IndividualLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
