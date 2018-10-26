import { Component, OnInit } from '@angular/core';
import { Library } from '../../../models/library';
import { LibraryService } from '../../../service/library-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-library',
  templateUrl: './edit-library.component.html',
  styleUrls: ['./edit-library.component.css']
})
export class EditLibraryComponent implements OnInit {
model:Library;
library:Library;
idLib: number;

a:any;
  private sub: any;
  constructor(private _libraryService:LibraryService,private route: ActivatedRoute) {
    this.model=new Library;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idLib = +params['IdLibrary'];})
    this._libraryService.libraries.forEach(element => {
       if(element.IdLibrary==this.idLib)
       this.model=element;
        debugger;
     });
     debugger;
    
  }

}
