import { Component,HostBinding } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/Games.';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent  {
    @HostBinding('class') classes='row'
    games:any=[]
  constructor(private gameService:GamesService){}
  ngOnInit(){
   this.getGames()
   
  }

  

  getGames(){
    this.gameService.getGames().subscribe(
        res=>{
          this.games=res
        },
        err=>console.log(err)  
    );
  }
  
  deleteGame(id:string){
this.gameService.deleteGame(id).subscribe(
    res=>console.log(res),
    
    err=>console.log(err)
    
    
)
this.getGames()

  }
}
