import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Human } from 'src/app/models/human';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
})
export class PlayerInfoComponent implements OnInit {
  @Output() selectedPlayer = new EventEmitter<Human>();
  @Output() addPlayerItem = new EventEmitter<Human>();

  @Input() player: Human = {
    name: '',
    strength: 0,
    aim: 0,
    agility: 0,
    luck: 0,
    health: 0,
    endurance: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  selectPlayer(player: Human) {
    this.selectedPlayer.emit(player);
  }

  addItem(player: Human) {
    this.addPlayerItem.emit(player);
  }
}
