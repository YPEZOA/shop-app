import { Component, OnInit } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';
import { IProduct } from '../../types/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  productToSearch!: string;
  products!: IProduct[];

  constructor(private productService: SearchProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public searchProduct(product: string): void {
    this.productToSearch = product;
  }

  public getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((resp: IProduct[]) => (this.products = resp));
  }
}
