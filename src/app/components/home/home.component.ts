import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodolistService} from "../../service/todolist.service";
import {ToDoListDTO} from "../../models/api/ToDoListDTO";
import {Router} from "@angular/router";
import {LoadingState} from "../../models/LoadingState.enum";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

  loadingState$: Subject<LoadingState> = this.todoListService.loadingStateSubject$;

  todolist : ToDoListDTO[] = [];
  ngOnDestroy(): void {
  }
  ngOnInit(): void {

    this.todoListService.getTodoList().subscribe({
      next:(data)=>{
        this.todolist=data;
        this.todoListService.loadingStateSubject$.next(LoadingState.Success);
      },
      error:(err)=>{
        alert(err);
        this.todoListService.loadingStateSubject$.next(LoadingState.Error);
      }
    });

  }

  constructor(private todoListService : TodolistService,private router: Router){
  }

  navigateToUpdate(todolist : any) {
    this.router.navigate(['/update', todolist.id]);
  }

  protected readonly LoadingState = LoadingState;

}
