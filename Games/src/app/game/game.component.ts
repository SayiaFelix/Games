import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games:Game[]=[
    {id:1,name:'FIFA 22',description:'Love the graphics'},
    {id:2,name:'PES 22',description:'The speed is awesome while using it'},
    {id:3,name:'Dream League 2022',description:'Compatible in my device'}
  
    
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
