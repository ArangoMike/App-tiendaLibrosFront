import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cantidadProducts!: Number;

  constructor(private router: Router, private purchaseService: PurchaseService) { }


  ngOnInit(): void {
   
    this.cantidadProducts = sessionStorage.length;
    this.purchaseService.myCart$.subscribe(myCart => {
      this.cantidadProducts = myCart
      console.log(myCart);
    })
  }

  goToCarrito() {
    this.router.navigate(['/shoppingCart'])
  }



}
