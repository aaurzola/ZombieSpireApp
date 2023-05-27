import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HumanCardComponent } from './components/human-card/human-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { ItemsComponent } from './pages/items/items.component';
import { ManagementComponent } from './pages/management/management.component';
import { PlayersComponent } from './pages/players/players.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HumanCardComponent, ItemsComponent, ManagementComponent, PlayersComponent, FooterComponent, LayoutComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
