import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServicesUserService } from 'src/app/services/user/services-user.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
user:User={
    email:"",
    name:"",
    surname:"",
    pass:""

}
constructor(private services:ServicesUserService){

}

loginUser(){
    this.services.login(this.user).subscribe(
        res=>{
            console.log(res);
            
        },
        err=>{
            console.log(err);
            
        }
    )
}



}
