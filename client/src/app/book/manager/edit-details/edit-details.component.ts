import { Component, OnInit } from '@angular/core';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';
import { BookInLibrary } from '../../../models/book-in-library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  libraries:Library;
  library:Library;
  
  constructor(private _libraryService:LibraryService, private router:Router) { }
  
  ngOnInit() {
    this. library=new Library;
    
    this._libraryService.getLibrary(parseInt(sessionStorage.getItem("userId"))).subscribe(libraries=>{
      this.libraries=libraries;
      this._libraryService.libraries=libraries;
      debugger;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  }
  deleteLibrary(item:number)
  {
    swal({
      title: 'למחוק ספריה?',
      text: "האם אתה בטוח שברצונך למחוק את הספריה?",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText:'ביטול',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'כן, מחק את הספריה'
    }).then((result) => {
      if (result.value) {
        this._libraryService.deleteLibrary(item).subscribe(l=>{
          if(l)
          {
            swal(
              'נמחק!',
              'הספריה נמחקה בהצלחה',
              'success'
            )
        this.ngOnInit()
      }
          else
          {
            swal(
              'טעות!',
              '',
              'error'
            )
          }
        }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
      }
    })


  }
  getBooks(idLibrary:number)
  {
    this._libraryService.getBooksInLibrary(idLibrary).subscribe(b=>
    {
      if(b)
      {
        this._libraryService.idLibrary=idLibrary;
        this._libraryService.booksInLibrary=b;
       this.router.navigate(['./manager/ShowBooksInLibrary']);
      }
    })
  }

}
