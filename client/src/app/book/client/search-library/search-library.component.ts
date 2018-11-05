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
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { LendingService } from '../../../service/lending.service';
import { SearchObj } from '../../../models/search-obj';
import { SearchLibrary } from '../../../models/search-library';
declare const $: any;

@Component({
  selector: 'app-search-library',
  templateUrl: './search-library.component.html',
  styleUrls: ['./search-library.component.css']
})
export class SearchLibraryComponent implements OnInit {
  city: City;
  cityModel: City;
  category: Category;
  categoryModel: Category;
  bookInLibrary: BookInLibrary;
  libraryModel: Library;
  library: Library;
  author: Author;
  authorModel: Author;
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
      { name: "ID", value: 'IdLibrary', show: true, table: 'Libraries' },
    { name: 'ספריה:', value: 'NameLibrary', show: true, table: 'Libraries' },
    { name: 'עיר:', value: 'City', show: true, table: 'Libraries' },
    { name: 'רחוב:', value: 'Street', show: true, table: 'Libraries' },
    { name: 'מספר בית', value: 'NumHouse', show: true, table: 'Libraries' },
    { name: 'שעות פתיחה:', value: 'OpeningHours', show: true, table: 'Libraries' },
  ];
  public booksList: any[] = [];
  public libraries: SearchLibrary[] = [];
  public sort = '';
  public reverse = false;
  public myFilter = { Libraries: {} };
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

  constructor(private _LibraryService: LibraryService, private dialog: MatDialog, private _lendingService: LendingService) { }

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
    this._LibraryService.getLibrarySearch().subscribe(res => {
      this.libraries = res;
      this.libraries.forEach(library => this.booksList.push({ libraries: library }));
      // tslint:disable-next-line:no-debugger
      debugger;
    });

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
  showDetails(data: any) {
    this._lendingService.book = data.books;
    // tslint:disable-next-line:no-debugger
    debugger;
    this.openDialog();
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ShowDetailsComponent, dialogConfig);
  }
}
