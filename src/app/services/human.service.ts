import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Human } from '../models/human';

@Injectable({
  providedIn: 'root',
})
export class HumanService {
  private baseUrl = 'http://localhost:8080/zombierpg/api/v1/humans';

  constructor(private http: HttpClient) {}

  getAllHumans() {
    return this.http.get<Human[]>(this.baseUrl);
  }
}
