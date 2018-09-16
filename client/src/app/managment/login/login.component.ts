import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { Route } from '@angular/compiler/src/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
flag:number=1;
model:User;
u:User;
  constructor(private _userService:UserService,private router:Router) {
    this.model=new User;  
  }

  ngOnInit() {
  }
  onSubmit()
  {   

    this._userService.login(this.model.EMail,this.model.Password) 
    .subscribe(u => { 
      if(u)
      {
       // this._userService.setUserId(u.IdUser);
         sessionStorage.setItem("userId",u.IdUser);
        // sessionStorage.setItem("userMail", u.mail.toString());
        // sessionStorage.setItem("userPassword", user.password.toString());
        // sessionsessionStorage.setItem("userId",this.model.IdUser.toString());
        // sessionStorage.setItem('userId', this.model.IdUser.toString());
        if((u as User).IsAdmin==true)
        this.router.navigate(['./manager']);
        else
        this.router.navigate(['./client']);
      }

     
      else 
      this.router.navigate(['./managment/Register']);

       }
      
      , (error: HttpErrorResponse) => alert("mistake!!!!"))
  
    }      
  }