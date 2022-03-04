import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard-page',
  templateUrl: './product-dashboard-page.component.html',
  styleUrls: ['./product-dashboard-page.component.scss']
})
export class ProductDashboardPageComponent implements OnInit {

  // component instance
  @ViewChild(ProductListComponent, { static: false } )
  productList!: ProductListComponent;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit', this.productList);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.productList);
  }

  handleProductSubmit(p: Product) {
    // products de app-product-list
    this.productList.products.push(p);
  }

}
