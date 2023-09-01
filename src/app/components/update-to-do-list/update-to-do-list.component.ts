import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodolistService} from "../../service/todolist.service";
import {ToDoListDTO} from "../../models/api/ToDoListDTO";
import {Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-to-do-list',
  templateUrl: './update-to-do-list.component.html',
  styleUrls: ['./update-to-do-list.component.css']
})
export class UpdateToDoListComponent implements OnInit, OnDestroy {

  todolist : ToDoListDTO = {

    name : "",
    description : "",
    status : "",
    priority : "",
    deadline : ""
  }
  id = 3;

  messages : Message[] = [];
  constructor(private todoListService : TodolistService,private router : Router, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.messages = [{}];

    this.route.params.subscribe({
      next:(params)=>{
        this.id=params['id'];
        this.todoListService.getTodoListById(this.id.valueOf()).subscribe({
          next:(data)=>{
            this.todolist=data;
          },
          error:(err)=>{
            console.log(err);
          }
        });
      }
    });

  }

  ngOnDestroy(): void {
  }

   updateToDoList(){

    this.todoListService.updateTodoList(this.todolist).subscribe({
      next:(data)=>{
        this.messages.push({severity:'success', summary:'Success', detail:'ToDoList was updated'});
      },
      error:(err)=>{
        this.messages.push({severity:'error', summary:'Error', detail:'ToDoList was not updated'});
      }
    });
  }

  deleteToDoList(){

      this.todoListService.deleteTodoList(this.id).subscribe({
        next:(data)=>{
          this.messages.push({severity:'success', summary:'Success', detail:'ToDoList was deleted'});
        },
        error:(err)=>{
          this.messages.push({severity:'error', summary:'Error', detail:'ToDoList was not deleted'});
        }
      });
  }

}


