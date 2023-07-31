import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Array<{ product: Product; quantity: number }> = [];

  addToCart(product: Product, quantity = 1): void {
    this.cart.push({ product, quantity });
  }

  removeFromCart(product: Product): void {
    const index = this.cart.findIndex(
      (item) => item.product.name === product.name
    );
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart(): Array<{ product: Product; quantity: number }> {
    return this.cart;
  }

  getQuantity(product: Product): number {
    return (
      this.cart.find((item) => item.product.name === product.name)?.quantity ||
      0
    );
  }

  updateQuantity(product: Product, quantity: number): void {
    const index = this.cart.findIndex(
      (item) => item.product.name === product.name
    );
    if (index > -1) {
      if (quantity < 1) {
        this.cart.splice(index, 1);
        return;
      } else {
        this.cart[index].quantity = quantity;
      }
    }
  }
}
