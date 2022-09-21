import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: string[] = [];

  constructor(){
    this.games=['FIFA 22','PES 22','Dream League']



  }
  
}
