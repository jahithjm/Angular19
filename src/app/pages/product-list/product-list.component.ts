import { Component, signal } from '@angular/core';
import { product } from '../../components/models/product.model';
import { ProductCartComponent } from "../product-cart/product-cart.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCartComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  product = signal<product[]>([

    { id: 1, title: 'Product 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrp-qbFejPxOFM_1x7z5oWpyMj2DqQ7406Q&s0', price: 19.99,stock: 10  },
    { id: 2, title: 'Product 2', image: 'https://tech101.com.ph/wp-content/uploads/2023/02/MACBOOK-PRO-16-M1-SILVER.jpg', price: 29.99,stock: 14 },
    { id: 3, title: 'Product 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_xzdJixJWjaZOFe_41R273Gzb54MkeYNcQ&s', price: 39.99,stock:25 },
    { id: 4, title: 'Product 4', image: 'https://outdoorvitals.com/cdn/shop/products/greensatushopify.png?v=1701706579&width=1000', price: 49.99 ,stock:36},
    { id: 5, title: 'Product 5', image: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg', price: 59.99 , stock:0}
  ]);
}
