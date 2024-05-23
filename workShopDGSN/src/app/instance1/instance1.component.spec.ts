import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instance1Component } from './instance1.component';

describe('Instance1Component', () => {
  let component: Instance1Component;
  let fixture: ComponentFixture<Instance1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Instance1Component]
    });
    fixture = TestBed.createComponent(Instance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
