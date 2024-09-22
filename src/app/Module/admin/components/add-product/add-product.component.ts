import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/state/Product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  productForm: FormGroup 
 



  constructor(private formBuilder: FormBuilder, private productService:ProductService) {
    this.productForm = this.formBuilder.group({
      imageUrl: '',
      brand: '',
      title: '',
      color: '',
      quantity: null,
      price: null,
      discountedPrice: null,
      discountPersent: null,
      topLavelCategory: '',
      secondLavelCategory: '',
      thirdLavelCategory: '',
      description: '',
      size: ''
    });
   }

  

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.size=[{size:formData.size,quantity:formData.quantity}]

      this.productService.createProduct(formData)
      console.log(formData);
    }
  }
}
