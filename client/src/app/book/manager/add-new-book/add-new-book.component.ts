import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../models/book';
import { BookService } from '../../../service/book-service';
import { HttpErrorResponse } from '@angular/common/http';
import {Author}  from'../../../models/author'
import { from } from 'rxjs/internal/observable/from';
import { AuthorService } from '../../../service/author.service';
import {Category}from'../../../models/category'
import {CategoryService}from '../../../service/category.service'
import swal from 'sweetalert2';
import { text } from '@angular/core/src/render3/instructions';
import { Library } from 'src/app/models/library';
import { BookInLibrary } from 'src/app/models/book-in-library';
import { LibraryService } from 'src/app/service/library-service';
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

model:Book;
authors:Author;
author:Author;
categories:Category;
category:Category;
libraries:Library;
library:Library;
bookToAdd:BookInLibrary;
text:any="jjih";
  ngOnInit(): void {
    
  }

  constructor( private _libraryService:LibraryService,private router:Router,private _bookService:BookService,private _authorService:AuthorService,private _categoryService:CategoryService) {
    this.model=new Book;
    this.authors=new Author;    
    this.author=new Author;    
    this.categories=new Category;
    this.category=new Category;
    this. library=new Library;
    this.bookToAdd=new BookInLibrary;
    debugger;
    this._authorService.allAuthors().subscribe(authors=>{
      this.authors=authors;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
    this._categoryService.allCategories().subscribe(categories=>{
      this.categories=categories;
      debugger;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
     this._libraryService.getLibrary(parseInt(sessionStorage.getItem("userId"))).subscribe(libraries=>{
      debugger;
      this.libraries=libraries;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
this.model.Description
  }

  onSubmit()
  {       
    debugger;
    this.model.IdAuthor=this.author.IdAuthor;
    this.model.category=this.category.IdCategory;
    this._bookService.addNewBook(this.model) 
    .subscribe(book => { 
       if(book)
      {
        this.bookToAdd.IdBook=book.IdBook;
    this.bookToAdd.IdLibrary=this.library.IdLibrary;
    this._bookService.addBook(this.bookToAdd).subscribe(response=>{
      if(response)
      swal("Success","You add successfully a book","success");
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText));
      }
       } , (error: HttpErrorResponse) => alert("mistake!!!!"))
  
    }  
    gg(text:string)
    {
      alert(text);
    }
}
