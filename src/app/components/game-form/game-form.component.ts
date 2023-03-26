import { Component,HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Games.';
import { Router,ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent  {
    @HostBinding('class')classes='row'
game:Game={
    id:0,
    title:'',
    description:'',
    image:'',
    created_at:new Date()
}
edit:boolean=false
constructor(private gameService:GamesService,private router:Router,private activatedRoute:ActivatedRoute){



}
ngOnInit(){
   const params:any= this.activatedRoute.snapshot.params
   if (params.id) {
    this.gameService.getGame(params.id).subscribe(
        res=>{
            console.log(res);
           const getInfoParam:any=res
           this.game=getInfoParam
            this.edit=true
        },
        err=>{
            console.log(err);
            
        }
    )
   }
   
    
   }
   updateGame(){
   const identify:any=this.game.id
    this.gameService.updateGame(identify,this.game).subscribe(
        res=>{
            console.log(res);
            this.router.navigate(['/games'])
            
        },
        err=>{
            console.log(err);
            
        }
    )

   }
saveNewGame(){

    this.gameService.saveGame(this.game).subscribe(
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
