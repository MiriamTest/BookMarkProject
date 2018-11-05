import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Library } from '../models/Library';
import { Subject, pipe } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Payment } from '../models/payment';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
<<<<<<< HEAD
  constructor(private http: Http , private httpClient: HttpClient) { }
  addPayment(newPayment: Payment): Observable<any>  {
    return this.http.post("http://localhost:52339/api/Payment/addPayment", newPayment).pipe(map((response: any) => response.json()));

}
addCreditCard(newCreditCard:CreditCard):Observable<any>{
  return this.http.post("http://localhost:52339/api/CreditCard/addCreditCard",newCreditCard).pipe(map((response: any) => response.json()));

  
=======
  checkPayment(idUser: number): any {
    return this.httpClient.get("http://localhost:52339/api/Payment/checkPayment/" + idUser).pipe(map((response => response)));
  }

  constructor(private http: Http , private httpClient: HttpClient) { }
  addPayment(newPayment: Payment): Observable<any>  {
    return this.http.post("http://localhost:52339/api/Payment/addPayment", newPayment).pipe(map((response:any)=> response.json()));

}
addCreditCard(newCreditCard: CreditCard): Observable<any> {
  return this.http.post("http://localhost:52339/api/CreditCard/addCreditCard", newCreditCard).pipe(map((response: any) => response.json()));
>>>>>>> f5b93f6a18ffc2fa80de3dcee58c3361fdc7bc4b
}

deletePayment(idPayment: number): any {
  return this.httpClient.get("http://localhost:52339/api/Payment/deletePayment/" + idPayment).pipe(map((response => response)));
}
deleteCreditCard(idCreditCard: number): any {
  return this.httpClient.get("http://localhost:52339/api/CreditCard/deleteCreditCard/" + idCreditCard).pipe(map((response => response)));
}
}
