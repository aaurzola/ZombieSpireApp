import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './pages/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManagementComponent } from './pages/management/management.component';
import { PlayersComponent } from './pages/players/players.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: '/players', pathMatch: 'full' },
      { path: 'items', component: ItemsComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'manage', component: ManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
