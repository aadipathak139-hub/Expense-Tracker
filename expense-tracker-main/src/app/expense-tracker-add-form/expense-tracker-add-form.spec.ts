import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerAddForm } from './expense-tracker-add-form';

describe('ExpenseTrackerAddForm', () => {
  let component: ExpenseTrackerAddForm;
  let fixture: ComponentFixture<ExpenseTrackerAddForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTrackerAddForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerAddForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
