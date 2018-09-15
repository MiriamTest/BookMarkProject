
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
@Injectable()
export class LibraryService {
 
    constructor(private httpClient:HttpClient, private http:Http) { }
    public model:Library;
    saveModel(newLibrary:Library){
              this.model=newLibrary;
    }
    addLibrary(newLibrary: Library):Observable<any>  {
        debugger;
        return this.http.post("http://localhost:52339/api/Library/addLibrary",newLibrary).pipe(map((response:any)=> response.json()));

    }
    
    allCities():any{
      
        
        return this.httpClient.get("http://localhost:52339/api/Library/allCities").pipe(map((response=>response)));
    }
    allStreets():any{
        return this.httpClient.get("http://localhost:52339/api/Library/allStreets").pipe(map((response=>response)));
    }
    getLibrary(id:number):any{
        debugger;
        return this.httpClient.get("http://localhost:52339/api/Library/getLibrary/" + id).pipe(map((response=>response)));
    }
   
    allLibraries():any{
        return this.httpClient.get("http://localhost:52339/api/Library/allLibraries").pipe(map((response=>response)));
        
    }
}
