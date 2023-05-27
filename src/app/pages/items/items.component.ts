import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/models/human';
import { Item } from 'src/app/models/item';
import { HumanService } from 'src/app/services/human.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  itemList: Item[] = [];
  playerList: Human[] = [];

  constructor(
    private itemService: ItemService,
    private humanService: HumanService
    ) {}

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data: Item[]) => {
      this.itemList = data;
    });
    this.humanService.getAllHumans().subscribe((data: Human[]) => {
      this.playerList = data;
    });
  }

  playerItems(id: number) {
    this.itemService.getPlayerItems(id).subscribe((data: Item[]) => {
      this.itemList = data;
    });
  }
}
