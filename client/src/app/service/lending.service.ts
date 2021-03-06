import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Book } from '../models/book';
import { Http } from '@angular/http';
import { Lending } from '../models/lending';

@Injectable({
  providedIn: 'root'
})
export class LendingService {
book:Book;
Valid:boolean;
message:string;
valid:boolean=true;
  constructor(private httpClient:HttpClient,private http:Http) {
    this.book=new Book;
   }
 
//   allCities():any{
//     debugger;
//     return this.httpClient.get("http://localhost:52339/api/Library/allCities").pipe(map((response=>response)));
// }

  getLending(code:number):any{
   debugger;
    return this.httpClient.get("http://localhost:52339/api/Lending/getBook/" + code).pipe(map((response => response)));

}
isValid(code:number):any{
  debugger;
   return this.httpClient.get("http://localhost:52339/api/Lending/isValid/" + code).pipe(map((response => response)));

}
checkBook(code:number){
  return this.httpClient.get("http://localhost:52339/api/Lending/checkStatus/" + code).pipe(map((response => response)));
}
lending(l:Lending ){
  debugger;
  return this.http.post("http://localhost:52339/api/Lending/addLending",l).pipe(map(response=> response.json()));
}

changeStatus(code:number,status:number){
  return this.http.get("http://localhost:52339/api/Lending/changeToBorrowed/"+code+'/'+status).pipe(map((response => response)));
}
}
