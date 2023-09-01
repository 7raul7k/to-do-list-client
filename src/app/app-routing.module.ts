import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewToDoListComponent} from "./components/new-to-do-list/new-to-do-list.component";
import {UpdateToDoListComponent} from "./components/update-to-do-list/update-to-do-list.component";

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "add" , component : NewToDoListComponent},
  {path : "update/:id" , component : UpdateToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
