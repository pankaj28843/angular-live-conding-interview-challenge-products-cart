// product-card.component.ts
import { Component, Input } from '@angular/core';

import { Product } from '../models';
import { CartService } from '../services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  getQuantity() {
    return this.cartService.getQuantity(this.product);
  }

  updateQuantity(quantity: number) {
    this.cartService.updateQuantity(this.product, quantity);
  }
}
