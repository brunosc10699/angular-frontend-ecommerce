import { ShoppingBasketService } from './../shopping-basket.service';
import { IBasketProduct } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  basketProducts: IBasketProduct[] = [];
  total: number = 0;

  constructor(
    public shoppingBasketService: ShoppingBasketService,
  ) { }

  ngOnInit(): void {
    this.basketProducts = this.shoppingBasketService.getShoppingBasket();
    this.updateBasketTotal();
  }

  updateBasketTotal() {
    this.total = this.shoppingBasketService.getTotalAmountOfBasket();
  }

  removeFromBasket(productId: number) {
    this.basketProducts = this.basketProducts.filter(product => product.id !== productId);
    this.shoppingBasketService.removeFromBasket(this.basketProducts);
    this.updateBasketTotal();
  }

  finalizePurchase() {
    this.basketProducts = [];
    this.shoppingBasketService.finalizePurchase();
  }

  oneMore(productId: number) {
    this.shoppingBasketService.updateOrderedQuantity(Number(productId), 'more');
    this.updateBasketTotal();
  }

  oneLess(productId: number) {
    this.shoppingBasketService.updateOrderedQuantity(Number(productId), 'less');
    this.updateBasketTotal();
  }

}
