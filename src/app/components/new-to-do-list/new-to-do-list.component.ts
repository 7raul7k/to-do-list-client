import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodolistService} from "../../service/todolist.service";
import {Message} from "primeng/api";


@Component({
  selector: 'app-new-to-do-list',
  templateUrl: './new-to-do-list.component.html',
  styleUrls: ['./new-to-do-list.component.css']
})
export class NewToDoListComponent implements OnInit,OnDestroy{


  nameValue="";
  descriptionValue = "";
  statusValue = "";
  priorityValue = "";
  deadlineValue = "";

  messages: Message[] =[];
  ngOnDestroy(): void {
  }
  ngOnInit(): void {

      this.messages = [
      ];
  }




  constructor(private todoListService : TodolistService){
  }

  save(){
    let todolistDTO = {
      name:this.nameValue,
      description:this.descriptionValue,
      status:this.statusValue,
      priority:this.priorityValue,
      deadline:this.deadlineValue
    }

    this.todoListService.addTodoList(todolistDTO).subscribe({
      next: (data) => {
        this.messages.push({severity: 'success', summary: 'Success', detail: 'ToDoList was added'});


      }
    });
  }

}


