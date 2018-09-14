import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { LibraryPayment } from '../models/library-payment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Subject, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:Http) { }
  addPayment(newPayment: LibraryPayment):Observable<any>  {
    return this.http.post("http://localhost:52339/api/Payment/addPayment",newPayment).pipe(map((response:any)=> response.json()));

}

}
