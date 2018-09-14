import { Component } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { LoginComponent } from './managment/login/login.component';
import { UserService } from './service/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import{ChartModule} from'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'app';
  constructor(private dialog: MatDialog, private _userService:UserService){}
 
  openDialog() {
   
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LoginComponent, dialogConfig);
}

// sendMail()
// {
// this._userService.sendMail().subscribe(p=>{
//   if(p)
//   {}

// },(error: HttpErrorResponse) => alert(error.status + " " + error.statusText))


}


