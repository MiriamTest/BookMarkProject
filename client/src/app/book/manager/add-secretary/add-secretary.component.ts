import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user-service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-secretary',
  templateUrl: './add-secretary.component.html',
  styleUrls: ['./add-secretary.component.css']
})
export class AddSecretaryComponent implements OnInit {
model:User;
  constructor(private _userService:UserService,private router:Router) {
    this.model=new User;
   }

  ngOnInit() {
  }
  onSubmit() {
    this.model.Status=3
      this._userService.addUser(this.model) 
      .subscribe(m => { 
        if(m)
        {
          swal("Success","You have successfully registered","success");
          
          this.router.navigate(['./manager']);
        
        }
   }
         
        
        , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
      ); };
}
