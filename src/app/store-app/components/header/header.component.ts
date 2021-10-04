import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() productToSearch = new EventEmitter<string>();
  @Input() count!: number;
  @Input() subTotal!: number;

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  productSearchText: FormControl;
  text!: string;

  constructor() {
    this.productSearchText = new FormControl('');
  }

  ngOnInit(): void {
    this.productSearchText.valueChanges
      .pipe(debounceTime(200))
      .subscribe((prod) => {
        this.text = prod;
        this.productToSearch.emit(prod);
      });
    parseFloat(this.subTotal.toString());
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
    this.productToSearch.emit(this.text);
  }
}
