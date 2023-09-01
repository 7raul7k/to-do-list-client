import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NewToDoListComponent } from './components/new-to-do-list/new-to-do-list.component';
import {FormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UpdateToDoListComponent} from "./components/update-to-do-list/update-to-do-list.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewToDoListComponent,
    UpdateToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
