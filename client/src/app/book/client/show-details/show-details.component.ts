import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Lending } from 'src/app/models/lending';
import { UserService } from 'src/app/service/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { TouchSequence } from 'selenium-webdriver';
import { LendingService } from '../../../service/lending.service';
import { CreditCardDetailsComponent } from '../../creditCard-details/creditCard-details.component';
import { CreditCardService } from 'src/app/service/creditCard.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  book: Book;
  lending: Lending;
  idUser: number;

  constructor(private dialog: MatDialog, private _creditCardService: CreditCardService, private _userService: UserService, private dialogRef: MatDialogRef<ShowDetailsComponent>, private _lendingService: LendingService) {
    this.book = new Book;
    this.lending = new Lending;
    this.book.NameBook = this._lendingService.book.NameBook;
    this.book.IdBook = this._lendingService.book.IdBook;
    this.lending.IdUser = Number(sessionStorage.getItem("userId"));
    //  this.lending.IdBook = this._lendingService.specificBook.IdBookInLibrary;
  this.lending.IdBook = this._lendingService.idBookInLibrary;
    this._lendingService.newlending = this.lending;
  }

  ngOnInit() {
  }
  lend() {
    this.idUser = Number(sessionStorage.getItem("userId"));
    this._creditCardService.checkPayment(this.idUser).subscribe(res => {
      if (res) {
        this.makeLend();
      } else {
        this.dialogRef.close();
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(CreditCardDetailsComponent, dialogConfig);
      }
    }
    );
  }
  makeLend() {
    this.dialogRef.close();
    this._lendingService.lending(this.lending).subscribe(u => {
      if (u !== -1) {
        swal("ההשאלה בוצעה בהצלחה", " ראו פרטים נוספים במייל" + u, "success");
      } else {
        swal("אופס משהו השתבש...", "פנו למרכז התמיכה בטלפון מס1800345555:", "error");
      }

    }
      , (error: HttpErrorResponse) => alert("mistake!!!!"));
  }
}
