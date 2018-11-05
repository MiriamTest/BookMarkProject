import { Component, OnInit } from '@angular/core';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../../models/city';
import { HttpErrorResponse } from '@angular/common/http/http';
import { Street } from '../../../models/street';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-library',
  templateUrl: './edit-library.component.html',
  styleUrls: ['./edit-library.component.css']
})
export class EditLibraryComponent implements OnInit {
model: Library;
library:  Library;
idLib: number;
city: City[];
street: Street[];
cityModel: City;
streetModel: Street;

  private sub: any;
  constructor(private _libraryService:LibraryService,private route: ActivatedRoute) {
    this.model  = new Library;
    this.cityModel = new City;
   }

  ngOnInit() {
    debugger;
    setTimeout( this._libraryService.allCities().subscribe(c=>{
      this.city= c;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)),20)
     setTimeout( this._libraryService.allStreets().subscribe(s=>{
      this.street=s;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText)),40)
    this.sub = this.route.params.subscribe(params => {
      this.idLib = +params['IdLibrary'];})
    this._libraryService.libraries.forEach(element => {
      debugger;
       if(element.IdLibrary==this.idLib)
       {
         debugger;
       this.model=element;
     setTimeout(  this.city.forEach(element=>
      {
        if(element.IdCity==this.model.City)
        this.cityModel=element;
      }),100);
      this.cityModel.IdCity=this.model.City;
        debugger;
       }
     });

     debugger;
    
  }
  onSubmit() {
    this.model.City = this.cityModel.IdCity;
    this.model.Street = this.streetModel.IdStreet;
    this._libraryService.editLibrary(this.model).subscribe(
     (data) => alert("error"),
      (error) => swal("אישור", "השינויים בוצעו בהצלחה", "success"));
      }
}
