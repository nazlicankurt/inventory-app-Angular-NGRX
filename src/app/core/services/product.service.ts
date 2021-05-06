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

  getById(id: string) :Observable<Product> {
    return this.http.get<Product>(this.url +id)
}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  updateProduct(id:string | number, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(this.url + id, changes);
  }

  deleteProduct(id: string): Observable<Product> {

    return this.http.delete<Product>(this.url +id)
}
}
