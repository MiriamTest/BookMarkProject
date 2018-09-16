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
import { Library } from '../../../models/library';
import { Author } from '../../../models/author';
import { AuthorService } from '../../../service/author.service';
import { DatePipe } from '@angular/common';
import { NgModel } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
book:Book;
bookModel:Book;
city:City;
cityModel:City;
category:Category;
categoryModel:Category;
bookInLibrary:BookInLibrary;
libraryModel:Library;
library:Library;
author:Author;
authorModel:Author;
  // constructor(private router:Router, private _LibraryService:LibraryService,private _BookService:BookService,private _AuthorService:AuthorService) {

  //   this._LibraryService.allCities().subscribe(c=>{
  //     this.city=c;
  //    }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  // }

//   ngOnInit() {
// this._BookService.allBooks().subscribe(b=>{
//   this.book=b;
// }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
// this._BookService.allCities().subscribe(c=>{
//   this.city=c
// }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
// this._BookService.allCategories().subscribe(c=>{
//   this.category=c;
// }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
// this._LibraryService.allLibraries().subscribe(l=>{
//   this.library=l;
// }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
//    this._AuthorService.allAuthors().subscribe(a=>{
//      this.author=a;
//    }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
//   }

  // onSubmit()
  // {
  //   this.router.navigate(['./client/BooksFound',this.bookModel,this.cityModel]); 
   
  // }

// from here the new code---------
pageSize = 25;
  page = 0;
  public header = [
    // tslint:disable-next-line:quotemark
    { name: "ID", value: 'IdBook', show: true, table: 'books' },
    { name: 'ספר:', value: 'NameBook', show: true, table: 'books' },
    { name: 'קטגוריה:', value: 'category', show: true, table: 'books' },
    // { name: 'תאריך התחלה', value: 'meeting_start', show: true, table: 'order' },
    // { name: 'עדכון אחרון', value: 'updated_at', show: true, table: 'order' },
    // //{ name: 'סיום', value: 'meeting_end', show: true, table: 'order' },
    // { name: 'סטטוס', value: 'status', show: true, table: 'order' },
    // { name: 'אחריות', value: 'responsibility', show: false, table: 'order' },
    // { name: 'זמן עבודה משוער', value: 'meeting_end', show: false, table: 'order' },
    // { name: 'זמן עבודה בפועל', value: 'meeting_end', show: false, table: 'order' },
    // { name: 'פעולות', value: 'actions', show: true, table: '' },


    // { name: 'שם נותן שירות', value: 'name', show: false, table: 'business' },
    // //{ name: 'מספר משתמש', value: 'id', show: false, table: 'business' },
    // { name: 'שם עסק', value: 'company_name', show: true, table: 'business' },
    // { name: 'מספר עסק', value: 'id', show: false, table: 'business' },
    // { name: 'ח.פ./ ת.ז', value: 'company_id', show: true, table: 'business' },
    // { name: 'טלפון', value: 'phone', show: false, table: 'business' },
    // { name: 'כתובת מייל', value: 'email', show: false, table: 'business' },

    // { name: 'מספר לקוח', value: 'id', show: false, table: 'customer' },
    // { name: 'שם לקוח', value: 'first_name', show: true, table: 'customer' },
    // { name: 'כתובת', value: 'full_address', show: true, table: 'customer' },
    // { name: 'טלפון', value: 'phone', show: false, table: 'customer' },
    // { name: 'כתובת מייל', value: 'email', show: false, table: 'customer' }



  ];
  public booksList = new Array<any>();
  public books = new Array<Book>()
  public sort = '';
  public reverse = false;
  public myFilter = { order: {}, business: {}, customer: {} };
  public mySettings;
  public myTexts;
  categoriesModel: string[] = ['שונות', 'עולם החי'];
  // myCategories: IMultiSelectOption[] = [
  //   { id: 'שונות', name: 'שונות' },
  //   { id: 'עולם החי', name: 'עולם החי' },
  // ];
  statusModel: string[] = ['ממתין לתשלום', 'ממתין לאישור פגשיה', 'בוטל', 'ממתין לאישור הצעת מחיר', 'ממתין להצעת מחיר'];
  // myStatuses: IMultiSelectOption[] = [
  //   { id: 'ממתין לתשלום', name: 'ממתין לתשלום' },
  //   { id: 'ממתין לאישור פגשיה', name: 'ממתין לאישור פגשיה' },
  //   { id: 'בוטל', name: 'בוטל' },
  //   { id: 'ממתין לאישור הצעת מחיר', name: 'ממתין לאישור הצעת מחיר' },
  //   { id: 'ממתין להצעת מחיר', name: 'ממתין להצעת מחיר' },
  // ];

  constructor(protected date: DatePipe,private _BookService:BookService,
    ) { }

  ngOnInit() {
    // get settings for dropdown
    // this.mySettings = this.multiselectService.mySettings;
    // this.myTexts = this.multiselectService.myTexts;

    // get businesses
    // this.ordersDervice.getOrders().subscribe((res) => {
    //   this.orders = res.data;
    //   for (let i = 0; i < this.orders.length; i++) {
    //     this.ordersList[i] = { order: this.orders[i], business: this.orders[i].business, customer: this.orders[i].user };
    //   }
    //   console.log(this.ordersList);
    // });
    this._BookService.allBooks().subscribe(res =>{
      this.books=res;
      this.books.forEach(book => this.booksList.push({books: book}));})
  }

  onChangeStatus() {
    console.log(this.statusModel);
    this.myFilter['order']['status'] = { '$or': this.statusModel };
  }

  onClickTh(head) {
    if (this.sort === head.value) {
      this.reverse = !this.reverse;
    } else {
      this.sort = head.value;
    }
  }

  onColumnDragStart($event, id) {
    $event.dataTransfer.setData('id', id);
  }

  onDropColumn($event) {
    $event.preventDefault();
    const index_end = $($event.target).removeClass('onDragOver').attr('data-id');
    const index_start = $event.dataTransfer.getData('id');
    const temp = this.header[index_end];
    this.header[index_end] = this.header[index_start];
    this.header[index_start] = temp;
  }

  onDragOverColumn($event) {
    $event.preventDefault();
    $($event.target).addClass('onDragOver');
  }

  onDragLeaveColumn($event) {
    $event.preventDefault();
    $($event.target).removeClass('onDragOver');
  }

  preventClose(event: MouseEvent) {
    event.stopImmediatePropagation();
  }

  selectAll(select: NgModel, values, event) {
    console.log("test", event);
    select.update.emit(values);
  }

}
