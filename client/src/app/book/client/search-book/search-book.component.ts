import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Book } from '../../../models/book';
import { City } from '../../../models/city';
import { LibraryService } from '../../../service/library-service';
import { HttpErrorResponse } from '@angular/common/http';
import { BookService } from '../../../service/book-service';
import { BookInLibrary } from '../../../models/book-in-library';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
book:Book;
bk:any;
city:City;
ct:any;
category:Category;
cat:any;
bookInLibrary:BookInLibrary;
  constructor(private router:Router, private _LibraryService:LibraryService,private _BookService:BookService) {

    this._LibraryService.allCities().subscribe(c=>{
      this.city=c;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  }

  ngOnInit() {
this._BookService.allBooks().subscribe(b=>{
  this.book=b;
}, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
this._BookService.allCities().subscribe(c=>{
  this.city=c
}, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
this._BookService.allCategories().subscribe(c=>{
  this.category=c;
}, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  }
  onSubmit()
  {
    this.router.navigate(['./client/BooksFound',this.bk,this.ct]); 
    // this._BookService.searchBook(this.bk,this.ct).subscribe(b=>{
    //  debugger;
    //  this.bookInLibrary=b;
   
//      this.router.navigate(['./client/BooksFound',this.bk,this.ct]) 
//  },(error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  }
}
