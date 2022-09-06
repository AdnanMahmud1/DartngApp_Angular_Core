import { User } from './../_models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl= environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUserWithRoles(){
    return this.http.get<Partial<User[]>>(this.baseUrl+ 'admin/users-with-roles');
  }

  updateUserRoles(userName:string, roles:string[]){
    console.log(userName, roles)
    return this.http.post(this.baseUrl + 'admin/edit-roles/'+ userName + '?roles=' + roles, {});
  }
}
