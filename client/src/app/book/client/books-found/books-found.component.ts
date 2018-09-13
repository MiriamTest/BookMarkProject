
import { Book } from '../../../models/book';
import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { User } from "../../../models/user";
import { Router, ActivatedRoute } from '@angular/router';
import { SearchBookComponent } from '../search-book/search-book.component';
import { BookInLibrary } from '../../../models/book-in-library';
import { BookService } from '../../../service/book-service';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { Status } from '../../../models/status';
import { HttpErrorResponse } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';





@Component({
  selector: 'app-books-found',
  templateUrl: './books-found.component.html',
  styleUrls: ['./books-found.component.css'],
 
})
 export  class BooksFoundComponent implements OnInit {
  _LibraryService: any;
  private bk:any;
  private Idbook:number;
  private book:Book[];
  private IdCity:number;
  private library:Library;
  private Idstatus:number; 
  private bookInLibrary:BookInLibrary;
  status:Status;

  bookInLib:BookInLibrary;
  constructor(private router: ActivatedRoute,private _bookService:BookService, private _libraryService:LibraryService) 
  {

  }
   ngOnInit() 
    {
      this.router.params.subscribe(params => {
        // this.Idstatus=params['IdStatus'];
        // this._bookService.getStatus(this.Idstatus).subscribe(s=>
        //   {
        //     debugger;
        //     this.status=s;
        //     debugger;
        //   })
          this.Idbook=params['IdBook'];
      //    this._bookService.getBook(this.Idbook).subscribe(b=>
      //   {
      //    debugger;
      //     this.book=b;
        
        
      //  })
          this.IdCity=params['IdCity'];
        // this._libraryService.getLibrary(this.IdCity).subscribe(l=>
        //   {
        //     debugger;
        //       this.library=l;
        //   })
              //  this.bookInLib=_bookService.getBook(this.book);
       
            
          
          });
     
          this.bookInLibrary=new BookInLibrary();
        this._bookService.searchBook(this.Idbook,this.IdCity).subscribe(b=>{
         this.bookInLibrary=b;
         this._bookService.getBook(this.bookInLibrary).subscribe(k=>{
           this.book+=k;
         },(error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
        },(error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
        // this.book=new Book;
       
        
      }
    }
 


