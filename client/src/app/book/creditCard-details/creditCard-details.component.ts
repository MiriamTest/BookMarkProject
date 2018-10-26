import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { MatDialogRef } from '@angular/material';
import { CreditCardService } from 'src/app/service/creditCard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LibraryService } from '../../service/library-service';
@Component({
  selector: 'app-creditCard-details',
  templateUrl: './creditCard-details.component.html',
  styleUrls: ['./creditCard-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  creditCard:CreditCard;
month_validity:string;
year_validity:string;
  constructor(private dialogRef: MatDialogRef<CreditCardDetailsComponent>, private _creditCardService:CreditCardService, private _LibraryService:LibraryService) {
    this.creditCard=new CreditCard;
    
   }

  ngOnInit() {
  }

  onSubmit()
  {
    this.creditCard.IdUser=1;
   //this.payment.IdLibrary=17;
   // this.payment.Validity=this.month_validity+"/"+this.year_validity;
    this._creditCardService.addPayment(this.creditCard).subscribe(p=>{
      if(p==false)
      {
debugger;
        this._LibraryService.addLibrary(this._LibraryService.model).subscribe(l=>{
          if(l==true)
          {
            alert("ok");

          }
          else
          //to remove payment in db;
          alert("mistake lib");
        })
      }
      else
       alert("mistake");
      
    })
  }
}
