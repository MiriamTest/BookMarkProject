import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
manager:User;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    
    // this.router.params.subscribe(params => {
    //      this.manager = params['manager'];

      
//     });
  }

}
