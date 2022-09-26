import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games:Game[]=[
    new Game(1,'FIFA 22','Love the Graphics',new Date(2020,0,18)),
    new Game(2,'Pes 22','The speed is awesome',new Date(2021,5,18)),
    new Game(3,'Dream League','Compatible in my device',new Date(2022,8,29))
    // {id:1,name:'FIFA 22',description:'Love the graphics'},
    // {id:2,name:'PES 22',description:'The speed is awesome while using it'},
    // {id:3,name:'Dream League 2022',description:'Compatible in my device'}

  ]
toggleDetail(index: number){
this.games[index].showDescription=!this.games[index].showDescription;
}

completeGame(isComplete: any,index: number){
  if(isComplete){
    let toDelete = confirm(`Are you sure you want to delete ${this.games[index].name}?`)
   if(toDelete){
    
    this.games.splice(index,1);
  }
  }

}

addNewGame(game: Game){

  let gameLenth = this.games.length;
  game.id = gameLenth + 1;
  
  game.playDate = new Date(game.playDate);
  this.games.push(game);


}

  constructor() { }

  ngOnInit(): void {
  }

}
