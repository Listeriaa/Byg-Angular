import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS } from '../../mocks/products-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ProductCardComponent)
  productCards!: QueryList<ProductCardComponent>;

  products: Product[] = new Array();

  // DI
  constructor(private productService: ProductService) { }

  // Initialization
  ngOnInit() {
    //this.loadProductsViaMock();
    this.loadProductsViaHttp();
  }

  ngAfterViewInit() {
    console.log('product cards view children ', this.productCards.toArray())
  }

  loadProductsViaMock() {
    // via mock
    this.products = PRODUCTS;
  }

  loadProductsViaHttp() :void {
    this.productService.listAllProducts().subscribe( products => this.products = products)
  }


}
