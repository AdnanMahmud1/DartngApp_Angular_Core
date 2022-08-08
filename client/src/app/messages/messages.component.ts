import { MessageService } from './../_services/message.service';
import { Pagination } from './../_models/pagination';
import { Message } from './../_models/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages:Message[];
  pagination:Pagination;
  container='Inbox';
  pageNumber =1;
  pagesize=5;
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.messageService.getMessages(this.pageNumber, this.pagesize, this.container).subscribe(response =>{
      this.messages =response.result;
      this.pagination =response.pagination;
    })
  }
  pageChanged(event:any){
    if(this.pageNumber !== event.page){
      this.pageNumber = event.page;
      this.loadMessages();
    }
  }
}
