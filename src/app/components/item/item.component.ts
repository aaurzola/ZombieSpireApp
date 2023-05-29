import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerItem } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: PlayerItem | null = null;
  @Output() selectedItem = new EventEmitter<number>();
  @Output() selectedItemToDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  useItem() {
    this.selectedItem.emit(this.item!.id);
  }

  deleteItem() {
    this.selectedItemToDelete.emit(this.item!.id);
  }

}
