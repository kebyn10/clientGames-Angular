import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ServicesUserService {
    API_URI='http://localhost:3000/api'

  constructor(private http:HttpClient) { }


login(form:User){
    return this.http.post(`${this.API_URI}/users/login`,form)
}

}
