import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-adjuster',
  templateUrl: './quantity-adjuster.component.html',
  styleUrls: ['./quantity-adjuster.component.scss'],
})
export class QuantityAdjusterComponent {
  @Input() quantity = 0;

  @Output() quantityChange = new EventEmitter<number>();

  increaseQuantity() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
