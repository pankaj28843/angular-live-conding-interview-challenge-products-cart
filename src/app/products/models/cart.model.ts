import { Product } from './product.model';

export class Cart {
  items: Product[] = [];

  addToCart(product: Product): void {
    this.items.push(product);
  }

  removeFromCart(product: Product): void {
    const index = this.items.findIndex((item) => item.name === product.name);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getTotalCost(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }
}
