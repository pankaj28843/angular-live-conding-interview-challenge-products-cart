import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ProductCardComponent } from './components/product-card.component';
import { ProductPriceComponent } from './components/product-price.component';
import { QuantityAdjusterComponent } from './components/quantity-adjuster.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPage } from './components';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: ProductsListPage }];

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductPriceComponent,
    QuantityAdjusterComponent,
    ProductsListPage,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [ProductCardComponent],
})
export class ProductsModule {}
