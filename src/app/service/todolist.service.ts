import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ToDoListDTO} from "../models/api/ToDoListDTO";

@Injectable({
  providedIn: 'root'
})
export class TodolistService implements OnInit, OnDestroy{


  private url ="http://localhost:8080/api/v1/todo-list"
  constructor(private http : HttpClient) { }

  getTodoList():Observable<ToDoListDTO[]>{
  return this.http.get<ToDoListDTO[]>(this.url + "/all").pipe(catchError(this.handleError));
  }

  addTodoList(todoListDTO : ToDoListDTO):Observable<ToDoListDTO>{
    return this.http.post<ToDoListDTO>(this.url + "/add", todoListDTO).pipe(catchError(this.handleError));
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
