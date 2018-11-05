import { Component, OnInit } from '@angular/core';
import { BookInLibrary } from '../../../models/book-in-library';
import { LibraryService } from '../../../service/library-service';
import { forEach } from '@angular/router/src/utils/collection';
import { map } from 'rxjs/operators';
import { Book } from '../../../models/book';
import { BookService } from '../../../service/book-service';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-books-in-library',
  templateUrl: './show-books-in-library.component.html',
  styleUrls: ['./show-books-in-library.component.css']
})
export class ShowBooksInLibraryComponent implements OnInit {
books:BookInLibrary;

  constructor(private _libraryService:LibraryService, private _bookSerice:BookService) {
    debugger;
   }

  ngOnInit() {
  
    this.books=new BookInLibrary;
    this._libraryService.getBooksInLibrary(this._libraryService.idLibrary).subscribe(b=>{
      if(b)
      {
        debugger;
    this.books = b;
    this._bookSerice.bookInLibrary = b;
    debugger;
    }
    } , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
 
  }
delete(idBook:number)
{
  
  this._bookSerice.deleteBook(idBook).subscribe(b=>{
    debugger;
    if(b)
    {
      swal("אישור","מחקת ספר בהצלחה","success");
      this.ngOnInit();
    }
    
  } , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
}
}
