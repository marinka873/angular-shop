import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {OrderComponent} from './components/order/order.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {UserLoginComponent} from './components/user-login/user-login.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'login', component: UserLoginComponent},
    {path: 'order', component: OrderComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
