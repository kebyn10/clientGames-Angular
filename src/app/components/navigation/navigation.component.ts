import { Component } from '@angular/core';
import { ServicesUserService } from 'src/app/services/user/services-user.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  user:User={
    email:"",
    name:"",
    surname:"",
    pass:""

}
constructor(private service:ServicesUserService){

}
ngOnInit(){
  this.infoUser()

 }
log:any={
  first:'Login'
}


infoUser(){


  if (this.service.name) {
     const email:any=this.service.name

     this.service.infoUser(email).subscribe(
    res=>{

      const userInfo:any=res
      console.log(userInfo);

      this.user=userInfo
      this.log.first=this.user.name
      console.log(this.user.name);


    },
    err=>{
      console.log(err);

    }
  )
  }

}

}
