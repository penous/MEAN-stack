import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';
import { AddFriendComponent } from './add-friend/add-friend.component';

@NgModule({
  declarations: [AppComponent, FriendlistComponent, FriendListComponent, FriendCardComponent, AddFriendComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
