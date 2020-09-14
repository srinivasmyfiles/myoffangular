import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOperationsComponent } from './pg-operations.component';

describe('PgOperationsComponent', () => {
  let component: PgOperationsComponent;
  let fixture: ComponentFixture<PgOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
