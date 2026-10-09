import { Component, EventEmitter, Output } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ExpenseTrackerAddFormComponent } from '../expense-tracker-add-form/expense-tracker-add-form';

@Component({
  selector: 'app-expense-tracker-header',
  standalone: true,

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],

  templateUrl: './expense-tracker-header.html',
  styleUrl: './expense-tracker-header.scss'
})
export class ExpenseTrackerHeaderComponent {

  @Output() addExpense = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  addTransaction() {

    const dialogRef = this.dialog.open(
      ExpenseTrackerAddFormComponent,
      {
        width: '900px',
        panelClass: 'black-dialog'
      }
    );

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.addExpense.emit(result);
      }

    });

  }

}