import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class StoreAppModule {}
