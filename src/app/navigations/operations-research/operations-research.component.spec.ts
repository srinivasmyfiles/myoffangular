import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsResearchComponent } from './operations-research.component';

describe('OperationsResearchComponent', () => {
  let component: OperationsResearchComponent;
  let fixture: ComponentFixture<OperationsResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
