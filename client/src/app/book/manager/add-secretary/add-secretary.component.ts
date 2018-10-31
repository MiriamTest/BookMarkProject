import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user-service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';

@Component({
  selector: 'app-add-secretary',
  templateUrl: './add-secretary.component.html',
  styleUrls: ['./add-secretary.component.css']
})
export class AddSecretaryComponent implements OnInit {
model:User;
libraries:Library;
library:Library;
secratery:User;
  constructor(private _userService:UserService,private router:Router,private _libraryService:LibraryService) {
    this.model=new User;
    this.libraries=new Library;
    this.library=new Library;
    this._libraryService.getLibrary(parseInt(sessionStorage.getItem("userId"))).subscribe(libraries=>{
     
      this.libraries=libraries;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
     }
   

  ngOnInit() {
  }
  onSubmit() {
    debugger;
    this.model.Status=3
      this._userService.addUser(this.model) 
      .subscribe(m => { 
        if(m)
        {
          this.secratery=m;
          debugger;
          // swal("Success","You have successfully registered","success");
          this._libraryService.addSecrateryToLibrary(this.library.IdLibrary,this.secratery.IdUser).subscribe(s=>{
            if(s)
            {}
           
          }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
          this.router.navigate(['./manager']);
        
        }
   }
         
        
        , (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)
      ); 
      debugger;
      
    };
}
