import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholasticHomeComponent } from './scholastic-home.component';

describe('ScholasticHomeComponent', () => {
  let component: ScholasticHomeComponent;
  let fixture: ComponentFixture<ScholasticHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholasticHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholasticHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
