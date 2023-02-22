import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product';
import { ProductToBuy } from 'src/app/models/productToBuy';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];
  userT:any = '';
  total:number = 0;
  cantidades:number[]= Array(this.products.length).fill(1);
  productTobuys: ProductToBuy[] = [];
  name: string = '';
  idType: string = '';
  idClient: string = '';
  purchaseFinal!: Purchase;
  product: any;
  form!: FormGroup;
  constructor(private purchaseService: PurchaseService,
     private fb: FormBuilder, private cookieSvc: CookieService) {

    this.goproducts();
    this.crearForm();
   
  }
  
  ngOnInit(): void {

   this.userT = JSON.parse(this.cookieSvc.get('user'));  
   this.crearForm();
  }

  crearForm(): void {
    this.form = this.fb.group({
      idType: ['', [Validators.required, Validators.minLength(2)]],
      idClient: ['', [Validators.required, Validators.minLength(5)]],
      clientName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  goproducts() {
    for (let i = 0; i < sessionStorage.length; i++) {

      var key = sessionStorage.key(i);

      var product = sessionStorage.getItem(key!);

      if (product) {
        this.product = JSON.parse(product)
        this.products.push(this.product);
      }

    }

  }

  buy() {
    const user = this.form.value;
    for (let i = 0; i < this.products.length; i++) {

      if(this.cantidades[i]){

      this.productTobuys.push({
        id: this.products[i].id,
        quantity: this.cantidades[i]
      });

      this.total = this.total + (this.products[i].price * this.cantidades[i]);

    }else{
       return alert('recuerda ajustar las cantidades de cada libro.')
    }
        
    }

    this.purchaseFinal = {
      clientName: user.clientName,
      idType: user.idType,
      idClient: user.idClient,
      email: user.email,
      products: this.productTobuys,
      total: this.total
    }

     this.purchaseService.savePurchase(this.purchaseFinal,this.userT.data)
  .subscribe({next: (res) => {
    
    var newRes =JSON.parse(res)
  
    alert(`Compra con #id: ${newRes.data} por valor de: $${this.total} hecha satisfactoriamente.`)
   
    sessionStorage.clear();

     setTimeout(() => {
       window.location.reload();  
     }, 5000);
  } ,
  error: (e) =>{
    alert("Compra fallida, rectifica todos tus datos y cantidades disponibles.")
  }
  });
      
  
  }

  increase(index:any){
 
  if(this.cantidades[index]){
    this.cantidades[index]++;
  }else{
    this.cantidades[index] = 1;
  }
 }

 decrease(index:any){
 
  if(this.cantidades[index]){
    this.cantidades[index]--;
  }else{
    this.cantidades[index] = 0;
  }
 }

removeProduct(id: any){
sessionStorage.removeItem(`${id}`)

}



}
