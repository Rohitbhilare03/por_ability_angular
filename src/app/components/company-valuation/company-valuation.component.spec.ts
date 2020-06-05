import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyValuationComponent } from './company-valuation.component';

describe('CompanyValuationComponent', () => {
  let component: CompanyValuationComponent;
  let fixture: ComponentFixture<CompanyValuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyValuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
