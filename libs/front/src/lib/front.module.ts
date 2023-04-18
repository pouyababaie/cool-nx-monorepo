import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';

const modules = [ProductsModule];

@NgModule({
  imports: [CommonModule, HttpClientModule, ...modules],
  exports:[...modules]
})
export class FrontModule {}
