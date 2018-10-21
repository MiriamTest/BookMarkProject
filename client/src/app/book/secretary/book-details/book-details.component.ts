import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { MatDialogRef } from '@angular/material';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { LendingService } from 'src/app/service/lending.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book:Book;
message:string;
check:any;
  constructor(public _lendingService:LendingService,private dialogRef: MatDialogRef<BookDetailsComponent>) {
  this.book=new Book;
    this.book=this._lendingService.book;
    debugger;
   }

  ngOnInit() {
    this.message=this._lendingService.message;
    this.check=this._lendingService.valid;
  }
  changeStatus()
{debugger;
  
  this._lendingService.changeStatus(parseInt(sessionStorage.getItem("idLending")),1).subscribe(b=>{
    if(b)
    swal("Success","You have successfully registered","success");
    else
    swal("Error","You have successfully registered","error");
  },(error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
  );

}

}
