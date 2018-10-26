
import { MatDialogConfig, MatDialog } from '@angular/material';
import { unwatchFile } from 'fs';
import { LendingService } from 'src/app/service/lending.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {
  idLending:string;
  a:number;
  valid:boolean;
  theMessage:number;
  // book:Book
  constructor(private dialog: MatDialog ,private _LendingService:LendingService) { 
    // this.book=new Book;
  }

  ngOnInit() {
  }
  onSubmit(){
  
 
 sessionStorage.setItem("idLending",this.idLending);
 this._LendingService.getLending(Number(this.idLending)) 
    .subscribe(m => { 
      if(m)
      {
        debugger;
      this._LendingService.book=m;
      
      this.openDialog();
}
} , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
// this._LendingService.isValid(Number(this.idLending)).subscribe(i=>{
  
//   {
//   this._LendingService.Valid=i;
//   this.message();
// debugger;
// }מע ע
// } , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
this._LendingService.checkBook(Number(this.idLending)).subscribe(i=>{
  this.theMessage=Number(i);
  debugger;
  this.message();
})
   }
   
  message(){
  // if(this._LendingService.Valid==false)
  // this._LendingService.message="אינך אפשרות לבצע השאלה"
  // else
  // this._LendingService.message=null;
  if(this.theMessage==-1)
  {
     this._LendingService.message="אין אפשרות לבצע השאלה/החזרה";
     this._LendingService.valid=false;
  }  
  else if (this.theMessage>0)
  {
  debugger;
      this._LendingService.message=" קיים איחור של";
      this._LendingService.message+=this.theMessage;
      this._LendingService.message+=" ימים";
}
  else 
      this._LendingService.message=null;
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(BookDetailsComponent, dialogConfig);
}

}
