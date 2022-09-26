import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  newGame = new Game (0,"","",new Date())

  constructor() { }

  ngOnInit(): void {
  }

}
