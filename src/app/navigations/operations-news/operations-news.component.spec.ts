import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsNewsComponent } from './operations-news.component';

describe('OperationsNewsComponent', () => {
  let component: OperationsNewsComponent;
  let fixture: ComponentFixture<OperationsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
