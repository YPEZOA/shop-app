import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() productToSearch = new EventEmitter<string>();

  faShoppingCart = faShoppingCart;
  productSearchText: FormControl;
  text!: string;

  constructor() {
    this.productSearchText = new FormControl('');
  }

  ngOnInit(): void {}

  public onSubmit(e: Event): void {
    e.preventDefault();
    if (this.productSearchText.value !== '') {
      this.text = this.productSearchText.value;
      this.productToSearch.emit(this.text);
    } else {
      this.text = '';
    }
  }
}
