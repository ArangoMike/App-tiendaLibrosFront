import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { LibraryShopService } from 'src/app/services/libraryShop.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
  idProduct!:string;
  product: any ;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private libraryService : LibraryShopService,
    private fb : FormBuilder,private router: Router){this.getProduct(); }
  
  ngOnInit(): void {
   const idProduct = this.route.snapshot.paramMap.get('id');
   this.getProduct();
   console.log(this.product);
   
  }

  
  getProduct(){
    let id = this.route.snapshot.paramMap.get('id')
    this.libraryService.getProduct(id).subscribe(data =>{
      this.product = data;
      this.crearFormulario()
    })
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      
      id: [this.product.id, [Validators.required, Validators.minLength(5)]],
      name: [this.product.name, [Validators.required, Validators.minLength(4)]],
      autor: [this.product.autor, [Validators.required, Validators.minLength(4)]],
      inInventory: [this.product.inInventory, [Validators.required, Validators.minLength(1)]],
      enabled: [this.product.enabled, [Validators.required, Validators.minLength(1)]],
      min: [this.product.min, [Validators.required, Validators.minLength(1)]],
      max: [this.product.max, [Validators.required, Validators.minLength(1)]],
      img: [this.product.img, [Validators.required, Validators.minLength(1)]],
      state: [this.product.state, [Validators.required, Validators.minLength(1)]],
      price: [this.product.price, [Validators.required, Validators.minLength(1)]],
    });
  }

  get nameNoValido() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }
  get autorNoValido() {
    return this.form.get('autor')?.invalid && this.form.get('autor')?.touched
  }
  get minNoValido() {
    return this.form.get('min')?.invalid && this.form.get('min')?.touched
  }
  get maxNoValido() {
    return this.form.get('max')?.invalid && this.form.get('max')?.touched
  }
  get inInventoryNoValido() {
    return this.form.get('inInventory')?.invalid && this.form.get('inInventory')?.touched
  }
  get stateNoValido() {
    return this.form.get('state')?.invalid && this.form.get('state')?.touched
  }
  get enabledNoValido() {
    return this.form.get('enabled')?.invalid && this.form.get('enabled')?.touched
  }
  get priceNoValido() {
    return this.form.get('price')?.invalid && this.form.get('price')?.touched
  }

  


  guardar() {


    if (this.form.invalid) {
      
       return Object.values(this.form.controls).forEach( control => {
        control.markAllAsTouched();
      })

    } else {
      // Aquí hago el consumo del api post
      const productEdit = this.form.value;
      
     return this.libraryService.updateProduct(productEdit).subscribe(
        res => {
          alert('Producto Actualizado!')
          this.router.navigate(['/admin/management'])

        })
    }
  }


}
