import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { ItemsComponent } from './pages/items/items.component';
import { ManagementComponent } from './pages/management/management.component';
import { PlayersComponent } from './pages/players/players.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PossessivePipe } from './pipes/possessive.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ManagementComponent,
    PlayersComponent,
    FooterComponent,
    LayoutComponent,
    PlayerItemComponent,
    PlayerComponent,
    PlayerInfoComponent,
    PossessivePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
