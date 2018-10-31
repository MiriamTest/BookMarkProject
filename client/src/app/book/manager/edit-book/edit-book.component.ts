import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { BookService } from '../../../service/book-service';
import { HttpErrorResponse } from '@angular/common/http';
import { BookInLibrary } from '../../../models/book-in-library';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Status } from '../../../models/status';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
books: Book;
book: Book;
library: Library;
libraries: Library;
bookToAdd: BookInLibrary;
idBook: number;
model: BookInLibrary;
status: any[] = [];
sta: Status;
private sub: any;
  constructor(private _bookService: BookService, private _libraryService: LibraryService , private route: ActivatedRoute) {
    this.books = new Book;
    this.book = new Book;
    this.library = new Library;
    this.libraries = new Library;
    this.bookToAdd = new BookInLibrary;
    this.sta = new Status;
    this.model = new BookInLibrary;
    this.sub = this.route.params.subscribe(params => {
      this.idBook = +params['IdBook'];
     this._bookService.bookInLibrary.forEach(element =>{
       if(element.IdBookInLibrary == this.idBook)
       {
         this.model = element;
         debugger;
       }
     })
     }
      );
    this._bookService.allBooks().subscribe(books => {
      this.books = books;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
    // tslint:disable-next-line:radix
    this._libraryService.getLibrary(parseInt(sessionStorage.getItem("userId"))).subscribe(libraries => {
      this.libraries = libraries;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
    this._bookService.allStatuses().subscribe(s => {
      if (s) {
      this.status = s;
    }
    }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
    this.status.forEach(element=>{
      if((element as Status).IdStatus==this.model.IdStatus) {
      this.sta = element;
      }
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    debugger;
  this.model.IdBook = this.book.IdBook;
    this.model.IdLibrary = this.library.IdLibrary;
 //   this.bookToAdd.LendingDuration=this.duration;
 this.model.IdStatus=this.sta.IdStatus;
    this._bookService.editBook(this.model).subscribe(response => {
      if (response) {
      alert("great");
      }
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
}
}
