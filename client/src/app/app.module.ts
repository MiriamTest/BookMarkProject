import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManagmentComponent } from './managment/managment.component';
import { LoginComponent } from './managment/login/login.component';
import { ActivatedRoute } from '@angular/router';
import { RegisterComponent } from './managment/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule} from "@angular/common/http";
import { UserService } from"./service/user-service";
import { BookComponent } from './book/book.component';
import { ManagerComponent } from './book/manager/manager.component';
import { AddLibraryComponent } from './book/manager/add-library/add-library.component';
import { AddBookComponent } from './book/manager/add-book/add-book.component';
import { StatisticsComponent } from './book/manager/statistics/statistics.component';
import { AddNewBookComponent } from './book/manager/add-new-book/add-new-book.component';
import { LibraryService } from './service/library-service';
import { BookService } from './service/book-service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClientComponent } from './book/client/client.component';
import { SearchLibraryComponent } from './book/client/search-library/search-library.component';
import { SearchBookComponent } from './book/client/search-book/search-book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatCheckboxModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import{ChartsModule} from 'ng2-charts';
import {MatDialogModule} from "@angular/material";
import{MatDatepickerModule} from "@angular/material/datepicker"
import{ MatNativeDateModule} from"@angular/material";
import { CreditCardDetailsComponent} from './book/creditCard-details/creditCard-details.component';
import {MatSelectModule} from '@angular/material/select';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { ShowDetailsComponent } from './book/client/show-details/show-details.component';
import { BookDetailsComponent } from './book/secretary/book-details/book-details.component';
import { AddSecretaryComponent } from './book/manager/add-secretary/add-secretary.component';
import { SecretaryComponent } from './book/secretary/secretary.component';
import { EditDetailsComponent } from './book/manager/edit-details/edit-details.component';
import { EditLibraryComponent } from './book/manager/edit-library/edit-library.component';
import { ShowBooksInLibraryComponent } from './book/manager/show-books-in-library/show-books-in-library.component';


const route: Routes = [
  {
      path: 'managment', component: ManagmentComponent, children:
      [
          { path: 'Login', component: LoginComponent },
          { path: 'Register', component: RegisterComponent },
         
      ],

    

  },
  {
    path:'manager',component:ManagerComponent,children:
    [
      {path:'AddBook',component:AddBookComponent},
      {path:'AddNewBook',component:AddNewBookComponent},
      {path:'AddLibrary',component:AddLibraryComponent},
      {path:'AddSecretary',component:AddSecretaryComponent},
      {path:'EditDetails',component:EditDetailsComponent},
      // {path:'EditLibrary',component:EditLibraryComponent},
      {path:'ShowBooksInLibrary',component:ShowBooksInLibraryComponent},
     
    ]
  },
  {
    path:'client',component:ClientComponent,children:
    [
    
      {path:'SearchLibrary',component:SearchLibraryComponent},
      {path:'SearchBook',component:SearchBookComponent},
<<<<<<< HEAD
      {path:'PaymentDetails',component:PaymentDetailsComponent},
      {path:'ShowDetails',component:ShowDetailsComponent},
=======
      {path:'CreditCardDetails',component:CreditCardDetailsComponent},
>>>>>>> bd5fd3985f3f92f23aa68fc4184ef0abcd7144f1
    ]

  },
 { path:'secretary',component: SecretaryComponent},
 { path:'bookDetails',component:BookDetailsComponent},
 { path:'EditDetails',component:BookDetailsComponent},
 {path:'EditLibrary/:IdLibrary',component:EditLibraryComponent},
 
 
]
  
  
  
  
@NgModule({
 
 
  declarations: [
    AppComponent,
    ManagmentComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    ManagerComponent,
    AddLibraryComponent,
    AddBookComponent,
    StatisticsComponent,

    AddNewBookComponent,
    ClientComponent,
    SearchLibraryComponent,
    SearchBookComponent,
    CreditCardDetailsComponent,
    SecretaryComponent,
    BookDetailsComponent,
    ShowDetailsComponent,
    AddSecretaryComponent,
    EditDetailsComponent,
    EditLibraryComponent,
    ShowBooksInLibraryComponent,
 
   

  ],
  
  imports: [
    
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule,HttpClientModule,
    NgSelectModule,BrowserAnimationsModule,  
    MatButtonModule,MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDialogModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    FilterPipeModule
   
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatPaginatorModule,
    MatTableModule,
    FilterPipeModule
   
  ],

  providers: [UserService,LibraryService,BookService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
