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
import { BooksFoundComponent } from './book/client/books-found/books-found.component';

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
      {path:'Statistics',component:StatisticsComponent}
    ]
  },
  {
    path:'client',component:ClientComponent,children:
    [
    
      {path:'SearchLibrary',component:SearchLibraryComponent},
      {path:'BooksFound/:IdBook/:IdCity',component:BooksFoundComponent},
      {path:'SearchBook',component:SearchBookComponent}
    ]
  }
 
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
    BooksFoundComponent,
 
   

  ],
  imports: [
    
    BrowserModule,FormsModule,RouterModule.forRoot(route),HttpModule,HttpClientModule,NgSelectModule
  ],
  providers: [UserService,LibraryService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
