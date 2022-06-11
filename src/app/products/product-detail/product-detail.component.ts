import { ShoppingBasketService } from './../../shopping-basket.service';
import { ProductsService } from './../../products.service';
import { IProduct, IBasketProduct } from './../../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct | undefined;
  quantity: number = 1;

  constructor(
    private productsService: ProductsService,
    private notificationService: NotificationService,
    private shoppingBasketService: ShoppingBasketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.findById(productId);
    console.log(this.product);
  }

  addToBasket() {
    this.notificationService.notify("Produto adicionado ao carrinho");
    const basketProduct: IBasketProduct = {
      quantity: this.quantity,
      ...this.product!
    }
    this.shoppingBasketService.addToBasket(basketProduct);
  }

  oneMore() {
    if (this.quantity < this.product!.stock) this.quantity += 1;
  }

  oneLess() {
    if (this.quantity > 1) this.quantity -= 1;
  }

}
