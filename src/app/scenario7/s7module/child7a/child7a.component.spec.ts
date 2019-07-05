import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child7aComponent } from './child7a.component';

describe('Child7aComponent', () => {
  let component: Child7aComponent;
  let fixture: ComponentFixture<Child7aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child7aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
