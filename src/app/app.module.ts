import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VacationsPageComponent } from './vacations-page/vacations-page.component';
import { FormsModule } from '@angular/forms';
import {MyVacationsPageComponent} from './my-vacations-page/my-vacations-page.component';
import { EditVacationPageComponent } from './edit-vacation-page/edit-vacation-page.component';
import { VacationDataFormComponent } from './vacation-data-form/vacation-data-form.component';
import { NewVacationPageComponent } from './new-vacation-page/new-vacation-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VacationsPageComponent,
    MyVacationsPageComponent,
    EditVacationPageComponent,
    VacationDataFormComponent,
    NewVacationPageComponent, 
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
