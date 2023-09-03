import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {ToDoListDTO} from "../models/api/ToDoListDTO";
import {LoadingState} from "../models/LoadingState.enum";

@Injectable({
  providedIn: 'root'
})
export class TodolistService implements OnInit, OnDestroy{

  loadingStateSubject$ = new BehaviorSubject<LoadingState>(LoadingState.Idle);

  private url ="http://localhost:8080/api/v1/todo-list"
  constructor(private http : HttpClient) { }

  getTodoList():Observable<ToDoListDTO[]>{
    this.loadingStateSubject$.next(LoadingState.Loading);
  return this.http.get<ToDoListDTO[]>(this.url + "/all").pipe(catchError(this.handleError));
  }

  addTodoList(todoListDTO : ToDoListDTO):Observable<ToDoListDTO>{
    return this.http.post<ToDoListDTO>(this.url + "/add", todoListDTO).pipe(catchError(this.handleError));
  }

  getTodoListById(id : number):Observable<ToDoListDTO>{
    return this.http.get<ToDoListDTO>(this.url + `/get/${id}`).pipe(catchError(this.handleError));
  }
  updateTodoList(todoListDTO : ToDoListDTO):Observable<ToDoListDTO>{
    return this.http.put<ToDoListDTO>(this.url + "/update", todoListDTO).pipe(catchError(this.handleError));
  }

  deleteTodoList(id : number):Observable<ToDoListDTO>{
    return this.http.delete<ToDoListDTO>(this.url + `/delete/${id}`).pipe(catchError(this.handleError));
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(()=>'Something bad happened; please try again later.');
  };
}
