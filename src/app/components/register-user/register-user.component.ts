import { Component } from '@angular/core';
import { ServicesUserService } from 'src/app/services/user/services-user.service';
import { User } from 'src/app/models/User';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {


user:User={
  email:"",
  name:"",
  surname:"",
  pass:""
}

constructor(private service:ServicesUserService,private router:Router,private activated:ActivatedRoute){

}
resgister(){
 this.service.register(this.user).subscribe(
    res=>{
      console.log(res);

        this.router.navigate(['/games'])
 },
    err=>{
      console.log(err);

    }
  )


}


}
