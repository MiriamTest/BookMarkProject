import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {HttpErrorResponse } from '@angular/common/http';
import { Library } from '../models/Library';
import { Subject, pipe } from 'rxjs';
<<<<<<< HEAD
import { HttpClient } from 'selenium-webdriver/http';
=======
import { Payment } from '../models/payment';
>>>>>>> 53af0a32493813fe636716ec4d1de2c6bae75d54


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http:Http) { }
  addPayment(newPayment:Payment):Observable<any>  {
    return this.http.post("http://localhost:52339/api/Payment/addPayment",newPayment).pipe(map((response:any)=> response.json()));

}
addCreditCard(newCreditCard:CreditCard):Observable<any>{
  return this.http.post("http://localhost:52339/api/CreditCard/addCreditCard",newCreditCard).pipe(map((response:any)=> response.json()));

  
}

}
