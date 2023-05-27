import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  itemList: Item[] = [];
  columnsToDisplay = ['name', 'description'];
  dataSource = this.itemList;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((data: Item[]) => {
      this.itemList = data;
    });
    console.log(this.itemList);
  }
}
