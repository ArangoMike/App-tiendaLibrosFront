import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryShopService } from 'src/app/services/libraryShop.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  product: any ;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private libraryService : LibraryShopService,
    private fb : FormBuilder,private router: Router){ this.crearFormulario() }
  
  ngOnInit(): void {
   
   console.log(this.product);
   
  }

  


  crearFormulario(): void {
    this.form = this.fb.group({
      
      name: ['', [Validators.required, Validators.minLength(4)]],
      autor: ['', [Validators.required, Validators.minLength(4)]],
      inInventory: ['', [Validators.required, Validators.minLength(1)]],
      enabled: ['', [Validators.required, Validators.minLength(1)]],
      min: ['', [Validators.required, Validators.minLength(1)]],
      max: ['', [Validators.required, Validators.minLength(1)]],
      img: ['', [Validators.required, Validators.minLength(1)]],
      state: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  get nameNoValido() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }
  get autorNoValido() {
    return this.form.get('autor')?.invalid && this.form.get('autor')?.touched
  }
  get imgNoValido() {
    return this.form.get('img')?.invalid && this.form.get('img')?.touched
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

  


  crear() {


    if (this.form.invalid) {
      
       return Object.values(this.form.controls).forEach( control => {
        control.markAllAsTouched();
        console.log('invalido');
        
      })

    } else {
      // Aquí hago el consumo del api post
      const productEdit = this.form.value;
      
     return this.libraryService.createProduct(productEdit).subscribe(
        res => {
          alert('Producto Creado!')
          this.router.navigate(['/admin/management'])

        })
    }
  }


}
