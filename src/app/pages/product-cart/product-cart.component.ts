import { Component, inject, input } from '@angular/core';
import { product } from '../../components/models/product.model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [PrimaryButtonComponent,CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {

  cartService=inject(CartService);
  product=input.required<product>();
}
