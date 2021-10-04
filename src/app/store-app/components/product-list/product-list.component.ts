import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../types/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() shoppingCart = new EventEmitter<any[]>();

  count: any = 0;

  constructor() {}

  ngOnInit(): void {}

  public onAddOrRemove(product: IProduct, action: string) {
    if (action == '+') {
      this.count++;
      product.amount = this.count;
    }
    if (action == '-' && this.count > 0) {
      this.count--;
      product.amount = this.count;
    }
  }

  public removeCharacters(event: Event) {
    let target = event.target as HTMLInputElement;
    this.count = target.value.replace(/[^0-9]/g, '');
  }

  public onAddToCart(product: any) {
    product.amount = this.count == 0 ? 1 : parseInt(this.count);
    this.count = 0;
    this.shoppingCart.emit(product);
  }
}
