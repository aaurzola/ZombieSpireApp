import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerItem } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class PlayerItemService {
  baseUrl = 'http://localhost:8080/zombierpg/api/v1/humanItems';

  constructor(private http: HttpClient) {}

  reduceItemDurability(playerItemId: number) {
    return this.http.put<PlayerItem>(`${this.baseUrl}/use/${playerItemId}`, undefined);
  }

  deletePlayerItem(playerItemId: number) {
    return this.http.delete<void>(`${this.baseUrl}/${playerItemId}`);
  }
}
