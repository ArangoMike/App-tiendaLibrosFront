import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductToBuy } from 'src/app/models/productToBuy';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  totalProducts: number = 0;
  i:number= 0;
  productToBuy: Product[] =[];
  purchase!: Purchase;
  products: Product[] | undefined;
  page: number = 0;
  pages: Array<number> | undefined;

  constructor(private service: PurchaseService){
  }

  ngOnInit(): void {
    this.getProducts();
   
  }

  
  getProducts(): void { 
   
    this.service.getPage(this.page).subscribe((data) => {
        this.products = data;
    });
    this.service
      .getTotalPages()
      .subscribe((data) => (this.pages = new Array(data)));
    this.service
      .getCountQuestions()
      .subscribe((data) => (this.totalProducts = data));
  }

  pushProduct(product:Product){
    this.productToBuy?.push(product);
    
     sessionStorage.setItem(`${this.i++}`,JSON.stringify(this.productToBuy))
     var res = sessionStorage.key;
    console.log(this.productToBuy);
    
    
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
