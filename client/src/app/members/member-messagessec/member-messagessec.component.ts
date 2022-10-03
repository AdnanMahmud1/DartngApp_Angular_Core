import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messagessec',
  templateUrl: './member-messagessec.component.html',
  styleUrls: ['./member-messagessec.component.css']
})
export class MemberMessagessecComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
  messageContent: string;
  
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
   
  }

  sendMessage(){
    this.messageService.sendMessage(this.username, this.messageContent).then(() =>{
      this.messageForm.reset();
    })
  }
 
}
