import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listAllProducts(): Observable<Product[]> {

    //http
    //renvoie un observable
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(
      tap(x => console.log(x))
    )

  }
}
