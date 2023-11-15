import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  addProduct(data: product): Observable<any> {
    return this.http.post('http://localhost:3000/products', data);
  }

  productList(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string): Observable<product> {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(productData: product): Observable<product> {
    return this.http.put<product>(`http://localhost:3000/products/${productData.id}`, productData);
  }

  popularProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=4');
  }

  trendyProducts(): Observable<product[]> {  
    return this.http.get<product[]>('http://localhost:3000/trendyProducts');
  }

  getImages(): Observable<string[]> {
    return this.http.get<any[]>('http://localhost:3000/products').pipe(
      map((products: any[]) => {
        const imageUrls: string[] = products.map((product: { image: string }) => product.image);
        console.log(imageUrls); 
        return imageUrls;
      })
    );
  }
}
