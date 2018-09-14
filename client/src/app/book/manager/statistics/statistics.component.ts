import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';
import { BookService } from '../../../service/book-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor( private _bookService:BookService) { }
  // cake
  // public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData:number[] = [350, 450, 100];
  // public doughnutChartType:string = 'doughnut';
  ngOnInit() {
    this._bookService.allBooks().subscribe(b=>{
      this.books=b;
     }, (error: HttpErrorResponse) => alert(error.status + " " + error.statusText))
  }



 model:Book;
 books:Book;
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

 

 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';

  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}