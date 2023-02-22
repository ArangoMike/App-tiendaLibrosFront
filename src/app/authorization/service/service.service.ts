import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { UserM } from 'src/app/models/userM';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient) { }

  private url: string = 'http://localhost:8080/api/v1/gate/auth/';


  saveUser(user: UserM):Observable<UserM>{
    let direction = this.url + 'reg/';
    return this.http.post<UserM>(direction,user,{
      responseType: 'text' as 'json',
    });
  }

  loginUser(user:UserM):Observable<any>{
    let direction = this.url + 'login/';
    return this.http.post<UserM>(direction,user,{
      responseType: 'text' as 'json',
    });
  }

}
