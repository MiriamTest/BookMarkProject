import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
// import { CustomValidators } from 'ngx-custom-validators';
// import { sha256, sha224 } from 'js-sha256';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userId: number;
  password2: string;
  signUpForm: FormGroup;
  form: FormGroup;
  constructor(private _userService: UserService, private router: Router, private _route: ActivatedRoute, public fb: FormBuilder) {
<<<<<<< HEAD
    _route.params.subscribe(params => this.userId = +params['userId']);
    this.flag = true;
//     const password = new FormControl('', Validators.required);
// const certainPassword = new FormControl('', CustomValidators.equalTo(password));

// this.form = new FormGroup({
//   password: password,
//   certainPassword: certainPassword,
//   flag : Boolean
// });
=======
    _route.params.subscribe(params => this.userId = params['userId']);
//     const password = new FormControl('', Validators.required);
// const certainPassword = new FormControl('', CustomValidators.equalTo(password));

this.form = new FormGroup({
  // password: password,
  // certainPassword: certainPassword
});
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    // this.signUpForm = this.fb.group({
    //   password: [''],
    //   repeatPassword:  ['']
    // });
  }

  ngOnInit() {

  }
  onSubmit() {
  //  console.log(sha256('tovy'));
<<<<<<< HEAD
    this._userService.restPassword(this.userId, this.passwordTO).subscribe(u => {
=======
    this._userService.restPassword(this.userId, this.password2).subscribe(u => {
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
      if (u) {
        swal('Success', 'You have successfully registered', 'success');
        this.router.navigate(['./managment/Login']);

      }
    }, (error: HttpErrorResponse) => alert('mistake!!!!'));

  }
}
