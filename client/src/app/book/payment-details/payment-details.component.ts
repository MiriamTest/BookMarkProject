import { Component, OnInit } from '@angular/core';
import { LibraryPayment } from '../../models/library-payment';
import { MatDialogRef } from '@angular/material';
import { PaymentService } from 'src/app/service/payment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LibraryService } from '../../service/library-service';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
payment:LibraryPayment;

  constructor(private dialogRef: MatDialogRef<PaymentDetailsComponent>, private _paymentService:PaymentService, private _LibraryService:LibraryService) {
    this.payment=new LibraryPayment;
    
   }

  ngOnInit() {
  }

  onSubmit()
  {
    this.payment.IdManager=1;
    this.payment.IdLibrary=17;
    this.payment.Validity="01/20";
    this._paymentService.addPayment(this.payment).subscribe(p=>{
      if(p==true)
      {

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
