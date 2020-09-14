import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDevelopmentComponent } from './knowledge-development.component';

describe('KnowledgeDevelopmentComponent', () => {
  let component: KnowledgeDevelopmentComponent;
  let fixture: ComponentFixture<KnowledgeDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
