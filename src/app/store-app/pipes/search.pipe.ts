import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../types/product.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: IProduct[], text: string): any {
    if (!text) return products;

    return products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
