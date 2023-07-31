import { Component, OnInit } from '@angular/core';

import { Product } from '../models';
import { ProductsService } from '../services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loading = true;
    this.productsService.fetchProducts().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }
}
