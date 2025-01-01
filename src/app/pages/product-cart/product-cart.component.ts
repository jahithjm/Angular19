import { Component, input } from '@angular/core';
import { product } from '../../components/models/product.model';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [PrimaryButtonComponent,CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {

  product=input.required<product>();
}
