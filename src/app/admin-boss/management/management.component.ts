import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product';
import { Purchase } from 'src/app/models/purchase';
import { LibraryShopService } from 'src/app/services/libraryShop.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {

  totalProducts: number = 0;
  userT:any = '';
  i:number= 0;
  purchase!: Purchase;
  products: Product[] | undefined;
  page: number = 0;
  pages: Array<number> | undefined;

  constructor(private libraryService: LibraryShopService,
    private purchaseService: PurchaseService,
    private cookieSvc: CookieService,
    private router: Router){
  }

  ngOnInit(): void {
    this.userT =JSON.parse(this.cookieSvc.get('user'));
    console.log(this.userT);
    
    this.getProducts();   
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

editProduct(product:Product){

this.router.navigate(['/admin/edit/'])

}
}
