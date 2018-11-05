import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { MatDialogRef } from '@angular/material';
import { Lending } from '../../models/lending';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag = 1;
  model: User;
  l: Lending;
  u: User;
  email: string;
  constructor(private _userService: UserService, private router: Router) {
    this.model = new User;
  }

  ngOnInit() {
  }
  checkForReset() {
    sha256("tovy");
    this._userService.checkForRestPassword(this.model.EMail).subscribe(u => {
      if (u) {
        swal("אימות חשבון", "ראו במייל פרטים נוספים", "info");
      }
    }, (error: HttpErrorResponse) => alert("mistake!!!!"));
  }
  onSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    //     this.l=new Lending();
    //     this.l.IdUser =1004;
    //     this.l.IdBook =1;
    // var u=this._userService.lending(this.l).subscribe(u => {
    //   if(u)
    //   {
    //   }

    //    }
    //   , (error: HttpErrorResponse) => alert("mistake!!!!"));

    this._userService.login(this.model.EMail, this.model.Password)
      .subscribe(u => {
        if (u) {
          this.model = u;
          sessionStorage.setItem("userId", u.IdUser);
          if (this.model.Status === 1) {
            this.router.navigate(['./manager']);
          } else if (this.model.Status === 2) {
            this.router.navigate(['./client']);
          } else {
            this.router.navigate(['./secretary']);
          }

        } else {
          this.router.navigate(['./managment/Register']);
        }

      }
        , (error: HttpErrorResponse) => alert("mistake!!!!"));
  }
}
