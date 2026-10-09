import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseTrackerAddFormComponent } from './expense-tracker-add-form';

// import { ExpenseTrackerAddForm } from './expense-tracker-add-form';

describe('ExpenseTrackerAddForm', () => {
  let component: ExpenseTrackerAddFormComponent;
  let fixture: ComponentFixture<ExpenseTrackerAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTrackerAddFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerAddFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
