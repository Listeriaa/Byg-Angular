import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PRODUCTS } from '../../mocks/products-data.mock';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ProductCardComponent) productCards!: QueryList<ProductCardComponent>;

  products: Product[] = new Array();

  // DI
  constructor(
  ) { }

  // Initialization
  ngOnInit() {
    this.loadProductsViaMock();
  }

  ngAfterViewInit() {
    console.log('product cards view children ', this.productCards.toArray())
  }

  loadProductsViaMock() {
    // via mock
    this.products = PRODUCTS;
  }


}
