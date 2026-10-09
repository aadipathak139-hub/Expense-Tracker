import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ExpenseTrackerAddFormComponent } from './expense-tracker-add-form/expense-tracker-add-form';
import { ExpenseTrackerHeaderComponent } from './expense-tracker-header/expense-tracker-header';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    ExpenseTrackerAddFormComponent,
    ExpenseTrackerHeaderComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  // =========================
  // TRANSACTIONS
  // =========================

  transactions: any[] = [];

  displayedColumns: string[] = [
    'description',
    'amount',
    'date',
    'category',
    'paymentMethod',
    'notes',
    'actions'
  ];

  // =========================
  // DELETE DIALOG
  // =========================

  deleteIndex: number = -1;

  showDeleteDialog: boolean = false;


  constructor(
    private dialog: MatDialog
  ) {}


  // =========================
  // ADD TRANSACTION
  // =========================

  addTransaction(transaction: any) {

    this.transactions.push(transaction);

    // Refresh table
    this.transactions = [
      ...this.transactions
    ];

    console.log(
      'Transaction added:',
      this.transactions.length
    );

    console.log(
      'All transactions:',
      this.transactions
    );
  }


  // =========================
  // DELETE TRANSACTION
  // =========================

  deleteTransaction(index: number) {

    this.deleteIndex = index;

    this.showDeleteDialog = true;
  }


  // =========================
  // CANCEL DELETE
  // =========================

  cancelDelete() {

    this.showDeleteDialog = false;

    this.deleteIndex = -1;
  }


  // =========================
  // CONFIRM DELETE
  // =========================

  confirmDelete() {

    if (this.deleteIndex !== -1) {

      this.transactions.splice(
        this.deleteIndex,
        1
      );

      // Refresh table
      this.transactions = [
        ...this.transactions
      ];
    }

    this.showDeleteDialog = false;

    this.deleteIndex = -1;
  }


  // =========================
  // EDIT TRANSACTION
  // =========================

  editTransaction(index: number) {

    const dialogRef = this.dialog.open(
      ExpenseTrackerAddFormComponent,
      {
        width: '600px',

        panelClass: 'black-dialog',

        data: {
          transaction: {
            ...this.transactions[index]
          },

          index: index
        }
      }
    );


    dialogRef.afterClosed().subscribe(
      (result: any) => {

        if (result) {

          this.transactions[result.index] =
            result.transaction;

          // Refresh table
          this.transactions = [
            ...this.transactions
          ];
        }

      }
    );
  }

}