import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Subject, pipe } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http:Http) { }
  addPayment(newCreditCard: CreditCard):Observable<any>  {
    return this.http.post("http://localhost:52339/api/Payment/addPayment",newCreditCard).pipe(map((response:any)=> response.json()));

}

}
