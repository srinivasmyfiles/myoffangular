import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyOperationsComponent } from './faculty-operations.component';

describe('FacultyOperationsComponent', () => {
  let component: FacultyOperationsComponent;
  let fixture: ComponentFixture<FacultyOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
