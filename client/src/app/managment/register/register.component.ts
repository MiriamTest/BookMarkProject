import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user-service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { parse } from 'url';
import swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
flag = 0;
model: User;
id: number;
status = "client";

constructor(private _userService: UserService, private router: Router) {
  this.model = new User;
}

  ngOnInit() {
  }
  onSubmit() {
  if (this.status === "manager") {
    this.model.Status = 1;
  } else {
    this.model.Status = 2;
  }
    this._userService.checkEMail(this.model.EMail).subscribe(res => {
     if (res) {
      this._userService.addUser(this.model)
      .subscribe(m => {
        if (m) {
          swal("Success", "You have successfully registered" , "success");
          if (this.model.Status === 1) {
          this.router.navigate(['./manager']);
          } else {
          this.router.navigate(['./client']);
          }
        }
   }
        , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
      );
  } else {
    this.model.EMail = "";
    swal("שגיאה", "מייל זה קיים במערכת נא להכניס מייל אחר", "error" );
  }
    }
      , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
      );

   }
    }

