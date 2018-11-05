import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Book } from 'src/app/models/book';
import { BookInLibrary } from 'src/app/models/book-in-library';
import { City } from '../models/city';

@Injectable()
export class BookService {  
idLibrary:number;
city:City;
bookInLibrary: BookInLibrary[];
    constructor(private httpClient:HttpClient, private http:Http) { }
    
    allBooks():any{
        debugger;
        return this.httpClient.get("http://localhost:52339/api/Book/allBooks").pipe(map((response=>response)));
}
allCategories():any{
    return this.httpClient.get("http://localhost:52339/api/Book/allCategories").pipe(map((response=>response)));
}

addNewBook(newBook: Book):Observable<any>  {
    debugger;
    return this.http.post("http://localhost:52339/api/Book/addNewBook",newBook).pipe(map((response:any)=> response.json()));

}
addBook(Book: BookInLibrary):Observable<any>  {
    debugger;
    return this.http.post("http://localhost:52339/api/Book/addBook",Book).pipe(map((response:any)=> response.json()));

}
searchBook(book:number,city:number):any{
   
    return this.httpClient.get("http://localhost:52339/api/Book/searchBook/" + book + "/" + city)
  .pipe(map((response => response)));

}

allCities(): any{
    // tslint:disable-next-line:no-debugger
    debugger;
    if(this.city==null) {
    return this.httpClient.get("http://localhost:52339/api/Library/allCities").pipe(map((response=>response)));
    }
    else
    return this.city;
}

getSearchObjs():any{
    return this.httpClient.get("http://localhost:52339/api/Book/getSearchObj");
}



getStatus(id: number): any {
    return this.httpClient.get("http://localhost:52339/api/Book/getStatus/" + id)
}
deleteBook(id: number): any {
    return this.http.get("http://localhost:52339/api/Book/deleteBook/"+id).pipe(map((response => response)));
}
allStatuses(): any {
    return this.httpClient.get("http://localhost:52339/api/Book/allStatuses").pipe(map((response => response)));
}
editBook(b: BookInLibrary): Observable<any>  {
    debugger;
    return this.http.post("http://localhost:52339/api/Book/editBook", b).pipe(map((response: any) => response.json()));

}
}