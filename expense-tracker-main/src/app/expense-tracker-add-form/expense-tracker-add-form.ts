import { Component, Inject, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-expense-tracker-add-form',
  standalone: true,

  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule
  ],

  templateUrl: './expense-tracker-add-form.html',
  styleUrl: './expense-tracker-add-form.scss'
})
export class ExpenseTrackerAddFormComponent {

  transaction = {
    description: '',
    amount: '',
    date: '',
    category: '',
    paymentMethod: '',
    notes: ''
  };

  editIndex: number | null = null;

  constructor(
    private dialogRef: MatDialogRef<ExpenseTrackerAddFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.transaction) {
      this.transaction = { ...data.transaction };
      this.editIndex = data.index;
    }
  }

  get isFormValid(): boolean {
    return !!this.transaction.description &&
           !!this.transaction.amount &&
           !!this.transaction.date &&
           !!this.transaction.category &&
           !!this.transaction.paymentMethod;
  }

  saveTransaction() {

    if (this.editIndex !== null) {
      this.dialogRef.close({
        transaction: this.transaction,
        index: this.editIndex
      });
    } else {
      this.dialogRef.close(this.transaction);
    }
  }

  clearForm() {
    this.transaction = {
      description: '',
      amount: '',
      date: '',
      category: '',
      paymentMethod: '',
      notes: ''
    };
  }

}