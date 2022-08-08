import { HttpClient } from '@angular/common/http';
import { Message } from './../_models/message';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessages(pageNumber, pageSize, container){
    let params =getPaginationHeaders(pageNumber, pageSize);
    params =params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseUrl+'messages', params, this.http);
  }
}