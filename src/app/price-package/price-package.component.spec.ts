/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PricePackageComponent } from './price-package.component';

describe('PricePackageComponent', () => {
  let component: PricePackageComponent;
  let fixture: ComponentFixture<PricePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
