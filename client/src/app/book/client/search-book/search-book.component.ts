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
declare const $: any;

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  book: Book;
  bookModel: Book;
  city: City;
  cityModel: City;
  category: Category;
  categoryModel: Category;
  bookInLibrary: BookInLibrary;
  libraryModel: Library;
  library: Library;
  author: Author;
  authorModel: Author;
  pageSize = 25;
  page = 0;
  public header = [
<<<<<<< HEAD
    // tslint:disable-next-line:quotemark
    { name: "ID", value: 'IdBook', show: false, table: 'books' },
    { name: "idBookInLibrary", value: 'IdBookInLibrary', show: false, table: 'books' },
    { name: 'ספר:', value: 'NameBook', show: true, table: 'books' },
=======
    { name: "ID", value: 'bookID', show: false, table: 'books' },
    { name: 'ספר:', value: 'bookName', show: true, table: 'books' },
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    { name: 'סופר:', value: 'authors', show: true, table: 'books' },
    { name: 'סטטוס:', value: 'statuss', show: true, table: 'books' },
    { name: 'קטגוריה:', value: 'category', show: true, table: 'books' },
    { name: 'ספריה:', value: 'library', show: true, table: 'books' },
    { name: 'עיר:', value: 'city', show: true, table: 'books' },
    { name: 'איזורים:', value: 'Region', show: true, table: 'books' },

  ];
  public booksList: any[] = [];
  public books: SearchObj[] = [];
  public sort = '';
  public reverse = false;
  public myFilter = { books: {} };
  public mySettings;
  public myTexts;
  categoriesModel: string[] = ['שונות', 'עולם החי'];
  statusModel: string[] = ['ממתין לתשלום', 'ממתין לאישור פגשיה', 'בוטל', 'ממתין לאישור הצעת מחיר', 'ממתין להצעת מחיר'];
  constructor(private _BookService: BookService, private dialog: MatDialog, private _lendingService: LendingService) { }

  ngOnInit() {
    this._BookService.getSearchObjs().subscribe(res => {
      this.books = res;
      this.books.forEach(book => this.booksList.push({ books: book }));
    })

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
<<<<<<< HEAD
    // this._lendingService.getSpesificBook(data.books.IdBookInLibrary).subscribe(u => {
    //   if (u) {
    //     this._lendingService.specificBook = u;
    //     this.openDialog();
    //   }
    // }
    //   , (error: HttpErrorResponse) => alert("mistake!!!!"));
    this._lendingService.idBookInLibrary = data.books.IdBookInLibrary;
=======
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    this.openDialog();
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ShowDetailsComponent, dialogConfig);
  }
}
