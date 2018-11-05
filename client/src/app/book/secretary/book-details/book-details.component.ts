import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { MatDialogRef } from '@angular/material';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { LendingService } from 'src/app/service/lending.service';
import { SearchObj } from 'src/app/models/search-obj';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: SearchObj;
  message: string;
  check: any;
  constructor(public _lendingService: LendingService, private dialogRef: MatDialogRef<BookDetailsComponent>) {
    this.book = new SearchObj;
    this.book = this._lendingService.book;
    // tslint:disable-next-line:no-debugger
    debugger;
  }

  ngOnInit() {
    this.message = this._lendingService.message;
    this.check = this._lendingService.valid;
  }
  changeStatus() {
    // tslint:disable-next-line:no-debugger
    debugger;

    this._lendingService.changeStatus(Number(sessionStorage.getItem("idLending")), 1).subscribe(b => {
      this.dialogRef.close();
      if (b) {
        swal("Success", "You have successfully registered", "success");
     } else {
        swal("Error", "You have successfully registered", "error");
      }
    }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
    );

  }

}
