import { Injectable, signal } from '@angular/core';
import { product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=signal<product[]>([]);

  addToCart(product: product)  {
    this.cart.update(items => [...items, product]);
  }

  constructor() { }
}
