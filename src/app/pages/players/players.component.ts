import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/models/human';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  humanList: Human[] = [];

  constructor(private humanService: HumanService) { }

  ngOnInit(): void {
    this.humanService.getAllHumans().subscribe(
      (data) => {
        this.humanList = data;
      });
  }

}
