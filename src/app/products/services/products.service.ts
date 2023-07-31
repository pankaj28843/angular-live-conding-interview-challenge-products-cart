import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { PRODUCTS } from '../fixtures/products.fixtures';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  fetchProducts(): Observable<Product[]> {
    // This will return products after 1 second
    return of(PRODUCTS).pipe(delay(1000));
  }
}
