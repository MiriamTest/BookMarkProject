
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
@Injectable()
export class LibraryService {
 
    constructor(private http:HttpClient) { }
    addLibrary(newLibrary: Library):Observable<any>  {
        debugger;
        return this.http.post("http://localhost:12345/api/Library/addLibrary",newLibrary).pipe(map((response:any)=> response.json()));

    }
    
    allCities():any{
        debugger;
        return this.http.get("http://localhost:12345/api/Library/allCities").pipe(map((response=>response)));
    }
    allStreets():any{
        return this.http.get("http://localhost:12345/api/Library/allStreets").pipe(map((response=>response)));
    }
    getLibrary(id:number):any{
        return this.http.get("http://localhost:12345/api/Library/getLibrary/" + id)
    }
    allLibraries():any{
        return this.http.get("http://localhost:12345/api/Library/allLibraries").pipe(map((response=>response)));
        
    }
}
