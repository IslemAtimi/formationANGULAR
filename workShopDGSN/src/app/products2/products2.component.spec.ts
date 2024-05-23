import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products2Component } from './products2.component';

describe('Products2Component', () => {
  let component: Products2Component;
  let fixture: ComponentFixture<Products2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Products2Component]
    });
    fixture = TestBed.createComponent(Products2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
