import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseUrl = 'http://localhost:8080/zombierpg/api/v1/items';

  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get<Item[]>(this.baseUrl);
  }
}