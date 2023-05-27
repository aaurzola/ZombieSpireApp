import { Component, Input, OnInit } from '@angular/core';

import { Human } from 'src/app/models/human';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() human: Human = {
    name: 'Player',
    strength: 0,
    aim: 0,
    luck: 0,
    agility: 0,
    endurance: 0,
    health: 0
  };


  constructor() { }

  ngOnInit(): void {
  }



}
