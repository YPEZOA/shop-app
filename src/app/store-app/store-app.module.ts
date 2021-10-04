import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StoreAppModule {}
