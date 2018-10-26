import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { MatDialogRef } from '@angular/material';
import { CreditCardService } from 'src/app/service/creditCard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LibraryService } from '../../service/library-service';
import { Payment } from 'src/app/models/payment';
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
  constructor(private dialogRef: MatDialogRef<CreditCardDetailsComponent>, private _creditCardService:CreditCardService, private _LibraryService:LibraryService) {
    this.creditCard=new CreditCard;
    this.payment=new Payment;
    
   }

  ngOnInit() {
  }

  onSubmit()
  {
<<<<<<< HEAD
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
=======
    this.creditCard.IdUser=Number(sessionStorage.getItem("userId"));
   
   this.creditCard.ExpiryDate=this.month_validity+"/"+this.year_validity;
   this._creditCardService.addCreditCard(this.creditCard).subscribe(cc=>{
    if(cc)
    {
      this.payment.Type=3;
      this.payment.IdUser=Number(sessionStorage.getItem("userId"));
      this.payment.IdCreditCard=cc.IdCreditCard;
      this._creditCardService.addPayment(this.payment).subscribe(p=>{
        if(p)
        {
  
          this._LibraryService.addLibrary(this._LibraryService.model).subscribe(l=>{
            if(l)
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
    else
     alert("mistake");
    
  })
   
>>>>>>> 53af0a32493813fe636716ec4d1de2c6bae75d54
  }
}
