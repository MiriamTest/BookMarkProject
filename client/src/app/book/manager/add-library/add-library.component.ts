import { Component, OnInit } from '@angular/core';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { City } from '../../../models/city';
import { Street } from '../../../models/street';
import { UserService } from 'src/app/service/user-service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CreditCardDetailsComponent } from '../../creditCard-details/creditCard-details.component';
import swal from 'sweetalert2';


@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css'],
})
export class AddLibraryComponent implements OnInit {
<<<<<<< HEAD
  model:Library;
  city:City;
  street:Street;
  cityModel:City;
  streetModel:Street;
  constructor(private dialog: MatDialog, private _LibraryService:LibraryService,private router:Router,private _userService:UserService) {
  this.cityModel=new City;
  this.streetModel=new Street;
    this.model=new Library;
    this.model.IdAdmin = Number(sessionStorage.getItem("userId"));
=======
  model: Library;
  city: City;
  street: Street;
  cityModel: City;
  streetModel: Street;
  // tslint:disable-next-line:max-line-length
  constructor(private dialog: MatDialog, private _LibraryService: LibraryService, private router: Router, private _userService: UserService) {
  this.cityModel = new City;
  this.streetModel = new Street;
    this.model = new Library;
    this.model.IdAdmin = _userService.UserId;
>>>>>>> ff69846edfd41dfa2cae63c2d22f2247f377b102
   }


  ngOnInit() {
    setTimeout( this._LibraryService.allCities().subscribe(c => {
      this.city = c;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)), 20);

    setTimeout(this._LibraryService.allStreets().subscribe(s => {
      this.street = s;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)), 40);
  }
  onSubmit() {
  this.openDialog();
  this.model.City = this.cityModel.IdCity;
  this.model.Street = this.streetModel.IdStreet;
this.model.IdAdmin = Number(sessionStorage.getItem("userId"));

    this._LibraryService.saveModel(this.model) 
    // .subscribe(m => { 
    //   if(m==true)
    //   {
    //      swal("Success","You have successfully registered","success");
    //   }
    //  }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
    // ); 
  }
      openDialog() {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(CreditCardDetailsComponent, dialogConfig);
    }
    }

