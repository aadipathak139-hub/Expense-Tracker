import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerHeader } from './expense-tracker-header';

describe('ExpenseTrackerHeader', () => {
  let component: ExpenseTrackerHeader;
  let fixture: ComponentFixture<ExpenseTrackerHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTrackerHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
