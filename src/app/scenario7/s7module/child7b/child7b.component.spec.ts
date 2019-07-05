import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child7bComponent } from './child7b.component';

describe('Child7bComponent', () => {
  let component: Child7bComponent;
  let fixture: ComponentFixture<Child7bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child7bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child7bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
