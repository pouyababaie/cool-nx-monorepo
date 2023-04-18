import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client';

@Component({
  selector: 'rihno-project-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  $products!: Observable<Product[]>;
  constructor(private productService: ProductsService) {
    this.$products = this.productService.getProducts();
  }
}
