import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServicesUserService } from 'src/app/services/user/services-user.service';
import { Router } from '@angular/router';
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
constructor(private services:ServicesUserService,private router:Router){

}

loginUser(){

    this.services.login(this.user).subscribe(
        res=>{
          console.log(res);

          if (res=="loged") {


            document.cookie=`name=${this.user.email};max-age=${60*1440};path=/;samesite=strict`
            window.location.href='games'
          }
          if (res=="passWrong") {
            alert('Password is incorrect')
          }
          if (res!="loged" && res!="passWrong") {
            alert('ocurrio un error')
          }

        },
        err=>{
            console.log(err);

        }
    )
}



}
