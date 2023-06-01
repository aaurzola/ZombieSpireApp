import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerItem } from 'src/app/models/item';

@Component({
  selector: 'player-item-app',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss'],
})
export class PlayerItemComponent implements OnInit {
  @Input() item: PlayerItem | null = null;
  @Output() selectedItem = new EventEmitter<number>();
  @Output() selectedItemToDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  useItem() {
    this.selectedItem.emit(this.item!.id);
  }

  deleteItem() {
    this.selectedItemToDelete.emit(this.item!.id);
  }
}
