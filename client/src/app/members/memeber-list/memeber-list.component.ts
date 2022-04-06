import { Component, OnInit } from '@angular/core';

import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
  //members$: Observable<Member[]>;
  members:Member[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 5;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers()
  }
  
  // loadMembers(){
  //   this.memberService.getMembers().subscribe(members => {
  //     this.members = members;
  //   })
  // }
 loadMembers(){
   this.memberService.getMembers(this.pageNumber, this.pageSize).subscribe(response =>{
     this.members = response.result;
     this.pagination =response.pagination;
   })
 }
 pageChanged(event: any){
   this.pageNumber =event.page;
   this.loadMembers();
 }

}
