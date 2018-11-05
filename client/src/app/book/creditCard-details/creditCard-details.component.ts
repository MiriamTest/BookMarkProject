import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { MatDialogRef } from '@angular/material';
import { CreditCardService } from 'src/app/service/creditCard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LibraryService } from '../../service/library-service';
import { Payment } from 'src/app/models/payment';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditCard-details',
  templateUrl: './creditCard-details.component.html',
  styleUrls: ['./creditCard-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  creditCard:CreditCard;
  payment:Payment;
month_validity:string;
year_validity:string;
  constructor(private router: Router, private dialogRef: MatDialogRef<CreditCardDetailsComponent>, private _creditCardService:CreditCardService, private _LibraryService:LibraryService) {
    this.creditCard=new CreditCard;
    this.payment = new Payment;
   }

  ngOnInit() {
  }

  onSubmit() {
    this.creditCard.IdUser = Number(sessionStorage.getItem("userId"));
   this.creditCard.ExpiryDate = this.month_validity + "/" + this.year_validity;
   this._creditCardService.addCreditCard(this.creditCard).subscribe(cc => {
    if (cc) {
      this.payment.Type = 3;
      this.payment.IdUser = Number(sessionStorage.getItem("userId"));
      this.payment.IdCreditCard = cc.IdCreditCard;
      this._creditCardService.addPayment(this.payment).subscribe(p=>{
        if ( p) {
          this._LibraryService.addLibrary(this._LibraryService.model).subscribe(l=>{
            if (l) {
              swal("אישור", "הספריה:  " + this._LibraryService.model.NameLibrary + "נוספה בהצלחה", "success");
              this.router.navigate(['./manager']);
            } else {
              this._creditCardService.deletePayment(p.IdPayment).subscribe(b => {
              }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)); // remove payment in db;

            swal("...אופס", "הוספה נכשלה", "error");
           }
          });
        } else {
          this._creditCardService.deleteCreditCard(cc.IdCreditCard).subscribe(b=>{
          }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
          swal("...אופס", "הוספה נכשלה", "error");
        }
      });
    } else {
     alert("mistake");
    }
  }); 
  }
}
