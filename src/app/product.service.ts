import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './Mockupdata';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e7af6b10e0463001633274f.mockapi.io/products';

  products = data;
  constructor(
    private http: HttpClient

  ) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
    
    
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
   addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
  
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}
