import { Component, OnInit } from '@angular/core';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { City } from '../../../models/city';
import { Street } from '../../../models/street';
import { UserService } from 'src/app/service/user-service';


@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css'],
   


})
export class AddLibraryComponent implements OnInit {
  model:Library;
  city:City;
  street:Street;
  constructor(private _LibraryService:LibraryService,private router:Router,private _userService:UserService) {
  
 this.model=new Library;
    this.model.IdAdmin=_userService.UserId;
   this._LibraryService.allCities().subscribe(c=>{
     this.city=c;
    }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
    this._LibraryService.allStreets().subscribe(s=>{
      this.street=s;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
   }


  ngOnInit() {
   
  }
  public onChange(event): void { 
    const newVal = event.target.value;
    console.log(newVal);
  }



  onSubmit() {
  debugger;
    this._LibraryService.addLibrary(this.model) 
    .subscribe(m => { 
      if(m)
      alert("ok");
       }
      
      , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)); };
  
    }


