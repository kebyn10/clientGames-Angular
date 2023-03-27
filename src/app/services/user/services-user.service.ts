import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesUserService {
    API_URI='http://localhost:3000/api'
    name:string=document.cookie.replace('name=','')
  constructor(private http:HttpClient) { }

infoUser(param:string){
  return this.http.get(`${this.API_URI}/users/${param}`)
}
login(form:User){
    return this.http.post(`${this.API_URI}/users/login`,form)
}
register(form:User){
  return this.http.post(`${this.API_URI}/users/`,form)
}


}
