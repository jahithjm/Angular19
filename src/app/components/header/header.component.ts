import { Component, inject, input, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title=signal("hello world from signal");

  // showButtonClick(){
  //   console.log(" showButtonClick");
  // }

  cartService=inject(CartService);

  //  product=input.required<product>();
}
