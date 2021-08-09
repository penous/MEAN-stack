import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  constructor(public friend: Friend) {}

  ngOnInit(): void {}
}
