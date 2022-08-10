import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messagessec',
  templateUrl: './member-messagessec.component.html',
  styleUrls: ['./member-messagessec.component.css']
})
export class MemberMessagessecComponent implements OnInit {
  
  @Input() messages: Message[];
  
  constructor() { }

  ngOnInit(): void {
   
  }
 
}
