import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { MatDialogRef } from '@angular/material';
import { CreditCardService } from 'src/app/service/creditCard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LibraryService } from '../../service/library-service';
import { Payment } from 'src/app/models/payment';
<<<<<<< HEAD
import { UserService } from 'src/app/service/user-service';
import { ShowDetailsComponent } from '../client/show-details/show-details.component';
import swal from 'sweetalert2';
import { LendingService } from 'src/app/service/lending.service';
=======
import swal from 'sweetalert2';
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditCard-details',
  templateUrl: './creditCard-details.component.html',
  styleUrls: ['./creditCard-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
<<<<<<< HEAD
  creditCard: CreditCard;
  payment: Payment;
  month_validity: string;
  year_validity: string;
  type = "hui";
  types: string[] = ['שנה', 'חודש', 'חד פעמי'];
  constructor(private _lendingService: LendingService, private dialogRef: MatDialogRef<CreditCardDetailsComponent>, private _creditCardService: CreditCardService, private _LibraryService: LibraryService) {
    this.creditCard = new CreditCard;
    this.payment = new Payment;
  }
=======
  creditCard:CreditCard;
  payment:Payment;
month_validity:string;
year_validity:string;
  constructor(private router: Router, private dialogRef: MatDialogRef<CreditCardDetailsComponent>, private _creditCardService:CreditCardService, private _LibraryService:LibraryService) {
    this.creditCard=new CreditCard;
    this.payment = new Payment;
   }
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject

  ngOnInit() {
  }

  onSubmit() {
<<<<<<< HEAD
    this.dialogRef.close();
    this.creditCard.IdUser = Number(sessionStorage.getItem("userId"));
    this.creditCard.ExpiryDate = this.month_validity + "/" + this.year_validity;
    this._creditCardService.addCreditCard(this.creditCard).subscribe(cc => {
      if (cc) {
        if (this.type === "שנה") {
            this.payment.Type = 1;
        } else if (this.type === "חודש") {
          this.payment.Type = 2;
      } else if (this.type === "חד פעמי") {
        this.payment.Type = 3;
    } else {
     this.payment.Type = 0;
    }
        this.payment.IdUser = Number(sessionStorage.getItem("userId"));
        this.payment.IdCreditCard = cc.IdCreditCard;
        this._creditCardService.addPayment(this.payment).subscribe(p => {
          if (p) {
            if (p.Type === 1) {
              this._LibraryService.addLibrary(this._LibraryService.model).subscribe(l => {
                if (l) {
                  alert("ok");

                } else {
                  this._creditCardService.deletePayment(p.IdPayment).subscribe(b => {
                  }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
                  // to remove payment in db;
                  alert("mistake lib");
                }

              });
            } else {
              this._lendingService.lending(this._lendingService.newlending).subscribe(u => {
                if (u !== -1) {
                  swal("ההשאלה בוצעה בהצלחה", " ראו פרטים נוספים במייל" + u, "success");
                } else {
                  swal("אופס משהו השתבש...", "פנו למרכז התמיכה בטלפון מס1800345555:", "error");
                }
              }
                , (error: HttpErrorResponse) => alert("mistake!!!!"));
            }
          } else {
            this._creditCardService.deleteCreditCard(cc.IdCreditCard).subscribe(b => {
            }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
            alert("mistake");
          }


        });
      } else {
        alert("mistake");
      }

    } , (error: HttpErrorResponse) => alert("mistake!!!!"));

=======
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
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
  }
}
