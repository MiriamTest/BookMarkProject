import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../../../models/bank-account';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
model:BankAccount;
  constructor() {
    this.model=new BankAccount;

   }

  ngOnInit() {
  }

}
