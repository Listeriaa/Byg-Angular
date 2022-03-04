import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/utils/services/resource.service';
import { ProductResource } from '../models/product-resource';

@Injectable({
  providedIn: 'root'
})
export class ProductResourceService extends ResourceService<number, ProductResource> {

  constructor(private http: HttpClient) {
    super(http);
    this.endpoint = 'products';
  }
}
