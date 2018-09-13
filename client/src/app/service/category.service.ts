import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author} from '../models/author';
import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 

  constructor(private http:HttpClient) { }
  allCategories():any{
    debugger;
    return this.http.get("http://localhost:12345/api/Author/allCategories").pipe(map((response=>response)));
  }
}
