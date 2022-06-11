import { ProductsComponent } from './../products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingBasketComponent } from './shopping-basket.component';

const routes: Routes = [
  { path: '', component: ShoppingBasketComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingBasketRoutingModule { }
