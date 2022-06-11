import { Injectable } from '@angular/core';
import { IBasketProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  basketProducts: IBasketProduct[] = [];

  addToBasket(product: IBasketProduct) {
    this.basketProducts.push(product);
    localStorage.setItem("basket", JSON.stringify(this.basketProducts));
  }

  removeFromBasket(basketProducts: IBasketProduct[]) {
    this.basketProducts = basketProducts;
    localStorage.setItem("basket", JSON.stringify(this.basketProducts));
  }

  getShoppingBasket() {
    this.basketProducts = JSON.parse(localStorage.getItem("basket") || "[]");
    return this.basketProducts;
  }

  getTotalAmountOfBasket() {
    return this.basketProducts.reduce(
      (previousProduct, currentProduct) => previousProduct + (currentProduct.quantity * currentProduct.price), 0
    );
  }

  cleanTheShoppingBasket() {
    this.basketProducts = [];
    localStorage.clear();
  }

  finalizePurchase() {
    this.cleanTheShoppingBasket();
    alert("Simulação, de compra, feita com sucesso!");
  }

  updateOrderedQuantity(productId: number, action: string) {
    const itemOrdered = this.basketProducts.find(item => item.id === productId);
    if (action === 'more' && itemOrdered!.quantity < itemOrdered!.stock) {
      this.basketProducts.forEach(product => {
        if (product.id === productId) product.quantity += 1;
      });
    } else if (action === 'less' && itemOrdered!.quantity > 1) {
      this.basketProducts.forEach(product => {
        if (product.id === productId) product.quantity -= 1;
      });
    }
    localStorage.setItem("basket", JSON.stringify(this.basketProducts));
  }

}
