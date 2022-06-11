import { IProduct, products } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = products;

  constructor() { }

  findAll() {
    return this.products;
  }

  findById(productId: number) {
    return this.products.find(product => product.id === productId);
  }
}
