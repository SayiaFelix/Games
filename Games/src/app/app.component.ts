import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  games: Game[]=[

    {id:1,name:'Fifa 2022'},
    {id:2,name:'PES 2022'},
    {id:3,name:'Dream League'},
  ];

}
