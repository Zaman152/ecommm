// seller-add-product.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  // Import NgForm
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  
  constructor(private product: ProductService) {}

  ngOnInit(): void {}

  submit(data: product, addProductForm: NgForm) {
    this.product.addProduct(data).subscribe(
      (result) => {
        console.warn(result);
        if (result) {
          this.addProductMessage = 'Product is added successfully';
          addProductForm.resetForm();  
        }
      },
      (error) => {
        console.error('Error adding product:', error);
        
      }
    );

    setTimeout(() => {
      this.addProductMessage = undefined;
    }, 3000);
  }
}
