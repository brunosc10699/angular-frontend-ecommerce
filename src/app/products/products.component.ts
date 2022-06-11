import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { IProduct } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] | undefined;
  description: string | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const products = this.productsService.findAll();
    this.route.queryParamMap.subscribe(params => {
      this.description = params.get("description")?.toLowerCase();
      if (this.description !== undefined) {
        this.products = products
          .filter(product => product.description.toLowerCase().includes(this.description!));
        return;
      }
      this.products = products;
    })
  }
}
