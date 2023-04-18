import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API_URL: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
