import { Injectable } from '@angular/core';
import {Games} from '../games-list';

@Injectable({
  providedIn: 'root'
})
export class GameService {
getGames(){
  return Games
}
  constructor() { }
}
