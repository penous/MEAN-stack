import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendServiceService {
  public url = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  addFriend(friend: Friend) {
    return this.http.post(`${this.url}/addfriend`, friend);
  }
}
