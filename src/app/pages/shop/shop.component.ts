import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product';
import { ProductToBuy } from 'src/app/models/productToBuy';
import { Purchase } from 'src/app/models/purchase';
import { LibraryShopService } from 'src/app/services/libraryShop.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  totalProducts: number = 0;
  userT:any = '';
  i:number= 0;
  purchase!: Purchase;
  products: Product[] | undefined;
  page: number = 0;
  pages: Array<number> | undefined;

  constructor(private libraryService: LibraryShopService,
    private cookieSvc: CookieService,
    private purchaseService: PurchaseService){
      
  }

  ngOnInit(): void {
    var us = this.cookieSvc.get('user');
    this.userT = JSON.parse(us!);
    this.getProducts();
    console.log(this.userT);
    
  }
  
  getProducts(): void { 
   
    this.libraryService.getPage(this.page,this.userT.data).subscribe((data) => {
        this.products = data;
    });
    this.libraryService
      .getTotalPages(this.userT.data)
      .subscribe((data) => (this.pages = new Array(data)));
    this.libraryService
      .getCountProducts(this.userT.data)
      .subscribe((data) => (this.totalProducts = data));
  }

  pushProduct(product:Product){
    
    sessionStorage.setItem(`${product.id}`,JSON.stringify(product)) 
    this.purchaseService.myCart.next(sessionStorage.length);
  }


  isLast(): boolean {
    let totalPages: any = this.pages?.length;
    return this.page == totalPages - 1;
  }

  isFirst(): boolean {
    return this.page == 0;
  }

  previousPage(): void {
    !this.isFirst() ? (this.page--, this.getProducts()) : false;
  }

  nextPage(): void {
    !this.isLast() ? (this.page++, this.getProducts()) : false;
  }

  getPage(page: number): void {
    this.page = page;
    this.getProducts();
  }



}
