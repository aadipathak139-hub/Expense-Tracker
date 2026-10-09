import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

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

  categories = [
    'Food & Dining',
    'Shopping',
    'Transport',
    'Entertainment',
    'Bills & Utilities',
    'Health',
    'Education',
    'Other'
  ];

  paymentMethods = [
    'Cash',
    'UPI',
    'Credit Card',
    'Debit Card',
    'Net Banking'
  ];

  constructor(
    private dialogRef: MatDialogRef<ExpenseTrackerAddFormComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {

    // EDIT MODE
    // Agar existing transaction hai,
    // to uska data automatically form mein fill hoga.

    if (data && data.transaction) {

      this.transaction = {
        ...data.transaction
      };

    }
  }

  saveTransaction() {

    this.dialogRef.close({
      transaction: this.transaction,
      index: this.data?.index
    });

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