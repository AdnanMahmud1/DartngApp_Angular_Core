import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';
import { UserParams } from 'src/app/_models/userParams';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
  //members$: Observable<Member[]>;
  // pageNumber = 1;
  // pageSize = 5;
  members:Member[];
  pagination: Pagination;
  userParams: UserParams;
  user: User;
  genderList = [{value:'male', display: 'Males'}, {value:'female', display: 'Females'}];

  constructor(private memberService: MembersService) {
   this.userParams = memberService.getUserParams();
   }

  ngOnInit(): void {
    this.loadMembers()
  }
  
  // loadMembers(){
  //   this.memberService.getMembers().subscribe(members => {
  //     this.members = members;
  //   })
  // }
 loadMembers(){
  this.memberService.setUserParams(this.userParams);
   this.memberService.getMembers(this.userParams).subscribe(response =>{
     this.members = response.result;
     this.pagination =response.pagination;
   })
 }
 resetFilters(){
   this.userParams = this.memberService.resetUserParams();
   this.loadMembers();
 }
 
 pageChanged(event: any){
   this.userParams.pageNumber = event.page;
   this.memberService.setUserParams(this.userParams);
   this.loadMembers();
 }

}
