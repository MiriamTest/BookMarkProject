import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user-service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { parse } from 'url';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
flag:number=0;
model:User;
id:number;
constructor(private _userService:UserService, private router:Router) {
  this.model=new User;
  
}

  ngOnInit() {
  }
  onSubmit() {
  
    this._userService.addUser(this.model) 
    .subscribe(m => { 
      if(m)
      
        swal("Success","You have successfully registered","success");
        if(this.model.IsAdmin==true)
        this.router.navigate(['./manager']);
        else
        this.router.navigate(['./client']);
 }
       
      
      , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
    ); };
  
    }

