import { Component, OnInit } from '@angular/core';
import { SearchProductService } from '../../services/search-product.service';
import { IProduct } from '../../types/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products!: IProduct[];
  filterValue!: string;
  productNotFound!: boolean;
  subTotal!: number;
  count!: any;
  lsCounts: any[] = [];
  lsSubTotal: any[] = [];

  constructor(private productService: SearchProductService) {
    this.count = 0;
    this.subTotal = 0;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public searchProduct(product: string): void {
    this.productNotFound = false;
    this.filterValue = product;
    const equals = [...this.products].some((prod) =>
      prod.name.toLowerCase().includes(product.toLowerCase())
    );
    if (!equals) this.productNotFound = true;
  }

  public onHandleAddToCart(event: any) {
    this.lsCounts.push(event.amount);
    this.count = [...this.lsCounts].reduce((acc, el) => acc + el);
    this.lsSubTotal.push(event.price * event.amount);
    this.subTotal = [...this.lsSubTotal].reduce((acc, el) => acc + el);
  }

  private getProducts(): void {
    this.productNotFound = false;
    this.productService.getProducts().subscribe((prod: IProduct[]) => {
      this.products = prod;
    });
  }
}
