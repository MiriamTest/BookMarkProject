import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../models/book';
import { BookService } from '../../../service/book-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Library } from 'src/app/models/library';
import { LibraryService } from 'src/app/service/library-service';
import { UserService } from 'src/app/service/user-service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
books:Book;
book:Book;
b:string;
libraries:Library;
library:Library;

  constructor(private router:Router,private _bookService:BookService, private _libraryService:LibraryService,private _userService:UserService) {
    this.book=new Book;
    this.books=new Book;
    // this.libraries[]=new Library;
   this. library=new Library;
    this._bookService.allBooks().subscribe(books=>{
      this.books=books;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
  this._bookService.allBooks().subscribe(c=>{
     this.b=c;
   }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
   this._libraryService.getLibrary(parseInt(sessionStorage.getItem("userId"))).subscribe(libraries=>{
    debugger;
    this.libraries=libraries;
   }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
   }

  ngOnInit() {
  }
  newBook()
  {
    this.router.navigate(['./manager/AddNewBook']);
  }
  addBook(){
    debugger;
    this._bookService.addNewBook(this.book).subscribe(response=>{
      if(response)
      alert("great");
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
  }
 



  }






