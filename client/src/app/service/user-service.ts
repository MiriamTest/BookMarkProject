
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, pipe } from 'rxjs';
import swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { map, takeUntil, tap, filter, catchError, mergeMap } from 'rxjs/operators';
import { Response } from '@angular/http/src/static_response';
import { HttpModule } from '@angular/http';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { debug } from 'util';
import { retry } from "rxjs/internal/operators/retry";
import { promise } from "protractor";
@Injectable()
export class UserService { 
   
    constructor(private http:Http ,private httpClient:HttpClient) { }
  
   
    addUser(newUser: User) {
        return this.http.post("http://localhost:52339/api/User/addUsers",newUser).pipe(map(response=> response.json()));

    }
public UserId;

        setUserId(UserId){
          this.UserId = UserId;
        }
    login(EMail:string,password:string):any{
        return this.httpClient.get("http://localhost:52339/api/User/login/" + EMail + "/" + password)
      .pipe(map((response => response)));
    }
    // sendMail():any{
    //     return this.httpClient.get("http://localhost:52339/api/SendingMail/sendMail")
    //   .pipe(map((response => response)));
    // }
}

