import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  @Input() game:Game | undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  gameSuper(complete:boolean){
    this.isComplete.emit(complete);

  }


  constructor() { }

  ngOnInit(): void {
  }

}
