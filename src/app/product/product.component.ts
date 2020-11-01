import { ProductService, ProductDetails } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  details: boolean = false;
  product: ProductDetails;
  productList: ProductDetails[] = [];


  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.loadAllDetails();
  }

  loadAllDetails() {
    this.productList = this.productService.getProducts();

  }
  detailsInfo(product: ProductDetails) {
    this.product = product;
    this.details = true;
  }

}
