import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './heper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public addUser(user:any){ 
    return this.http.post(`${baseUrl}/user/`,user);
  }
}
