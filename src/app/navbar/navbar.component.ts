import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../models/product';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cantidadProducts!: Number;
  userT:String | undefined;

  constructor(private router: Router,
     private purchaseService: PurchaseService,
     private cookieSvc: CookieService) { 
    this.purchaseService.myCart$.subscribe(myCart => {
      this.cantidadProducts = myCart;
      
    })
  }


  ngOnInit(): void {
    this.userT =this.cookieSvc.get('user');
    
    console.log(this.userT);
    
  }

  goUser(){
   var user = this.cookieSvc.get('user');
    if(user){
       this.userT = JSON.parse(user);
       console.log(user);
    }
  }
  goToCarrito() {
    this.router.navigate(['/shoppingCart'])
  }

  logout(){
  this.cookieSvc.deleteAll();
    window.location.assign("/login")
  }


}
