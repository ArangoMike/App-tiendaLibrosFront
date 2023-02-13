import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './pages/shoppingCart/shoppingCart.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin-boss/admin-boss.module').then(m => m.AdminBossModule)},
  { path: 'lobby', component: LobbyComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  {path: '**', pathMatch: 'full', redirectTo:'lobby'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
