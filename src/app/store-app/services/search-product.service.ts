import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IProduct } from '../types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchProductService {
  private API_URL = environment.api_url;
  products$ = new BehaviorSubject<IProduct[]>([]);
  filterProduct$ = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
