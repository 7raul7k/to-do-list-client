import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodolistService} from "../service/todolist.service";
import {ToDoListDTO} from "../models/api/ToDoListDTO";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

  todolist : ToDoListDTO[] = [];
  ngOnDestroy(): void {
  }
  ngOnInit(): void {

    this.todoListService.getTodoList().subscribe({
      next:(data)=>{
        this.todolist=data;
      },
      error:(err)=>{
        alert(err);
      }
    });

  }

  constructor(private todoListService : TodolistService){
  }

}
