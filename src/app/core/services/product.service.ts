import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: Product[] = [];

  url = 'https://60841f429b2bed0017040b2f.mockapi.io/products/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, { headers: this.httpHeaders });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(id: string,model: Product): Observable<Product> {
    return this.http.put<Product>(this.url + id, model);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + id);
  }
}
