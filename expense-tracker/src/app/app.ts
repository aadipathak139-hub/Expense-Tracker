import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

import { ExpenseTrackerHeaderComponent } from './expense-tracker-header/expense-tracker-header';
import { ExpenseTrackerAddFormComponent } from './expense-tracker-add-form/expense-tracker-add-form';

interface Transaction {
  description: string;
  amount: string;
  date: string;
  category: string;
  paymentMethod: string;
  notes: string;
}

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    ExpenseTrackerHeaderComponent,
    ExpenseTrackerAddFormComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  // =========================
  // TRANSACTIONS
  // =========================

  dataSource = new MatTableDataSource<Transaction>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'description',
    'amount',
    'date',
    'category',
    'paymentMethod',
    'notes',
    'actions'
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

  addTransaction(transaction: Transaction) {

    this.dataSource.data = [
      ...this.dataSource.data,
      transaction
    ];

    console.log(
      'Transaction added:',
      this.dataSource.data.length
    );

    console.log(
      'All transactions:',
      this.dataSource.data
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

      const updated = [...this.dataSource.data];

      updated.splice(this.deleteIndex, 1);

      this.dataSource.data = updated;
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
            ...this.dataSource.data[index]
          },

          index: index
        }
      }
    );


    dialogRef.afterClosed().subscribe(
      (result: any) => {

        if (result) {

          const updated = [...this.dataSource.data];

          updated[result.index] = result.transaction;

          this.dataSource.data = updated;
        }

      }
    );
  }

}