import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/models/human';
import { PlayerItem } from 'src/app/models/item';
import { HumanService } from 'src/app/services/human.service';
import { ItemService } from 'src/app/services/item.service';
import { PlayerItemService } from 'src/app/services/player-item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  playerItemList: PlayerItem[] = [];
  playerList: Human[] = [];

  constructor(
    private itemService: ItemService,
    private humanService: HumanService,
    private playerItemService: PlayerItemService
  ) {}

  ngOnInit(): void {
    this.humanService.getAllHumans().subscribe((data: Human[]) => {
      this.playerList = data;
    });
  }

  showPlayerItems(id: number) {
    this.itemService.getPlayerItems(id).subscribe((data: PlayerItem[]) => {
      this.playerItemList = data;
    });
  }

  useItem(playerItemId: number) {
    this.playerItemService.reduceItemDurability(playerItemId).subscribe(
      (data) => {
        let itemIndex = this.playerItemList.findIndex((item) => item.id == playerItemId);
        this.playerItemList[itemIndex] = data;
      }
    );
  }

  deleteItem(playerItemId: number) {
    console.log('deleting id: ' + playerItemId);
    this.playerItemService.deletePlayerItem(playerItemId).subscribe(
      () => {
        let itemIndex = this.playerItemList.findIndex((item) => item.id == playerItemId);
        this.playerItemList.splice(itemIndex, 1);
      });
  }
}
