import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpagePage } from './firstpage.page';

describe('FirstpagePage', () => {
  let component: FirstpagePage;
  let fixture: ComponentFixture<FirstpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
