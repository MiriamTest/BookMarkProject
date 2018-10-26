import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Lending } from 'src/app/models/lending';
import { UserService } from 'src/app/service/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material';
import { TouchSequence } from 'selenium-webdriver';
import { LendingService } from '../../../service/lending.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
book:Book;
lending:Lending;
  constructor(private _userService:UserService,private dialogRef: MatDialogRef<ShowDetailsComponent>,private _lendingService:LendingService) { 
    this.book=new Book;
    //just for try
    debugger;
    this.book.NameBook=this._lendingService.book.NameBook;
    this.book.IdBook=this._lendingService.book.IdBook;

    this.lending=new Lending;
   this.lending.IdUser = Number(sessionStorage.getItem("userId"));
   this.lending.IdBook =this.book.IdBook;
  }

  ngOnInit() {
  }
lend()
{
  

this._userService.lending(this.lending).subscribe(u => { 
   if(u)
   {
     swal("ההשאלה בוצעה בהצלחה"," ראו פרטים נוספים במייל","success")
   }

    }
  
   , (error: HttpErrorResponse) => alert("mistake!!!!"));
  


}
}