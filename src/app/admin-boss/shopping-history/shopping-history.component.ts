import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';
 

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.scss']
})
export class ShoppingHistoryComponent implements OnInit {
  
  userT:any = '';
  purchases: Purchase[] = [];
  page = 1;
constructor(private purchaseService: PurchaseService,
  private cookieSvc: CookieService){
  
}



  ngOnInit(): void {
    this.userT = JSON.parse(this.cookieSvc.get('user'));
    this.getAllPurchases();
  }

  getAllPurchases(){

    if(this.userT.msg.includes('ADMIN')){
      console.log('entre');
      
      this.purchaseService.getPurchases(this.userT.data).subscribe(data =>{
        this.purchases = data;
      })
    }else{
      this.purchaseService.getPurchasesUser(this.userT.data).subscribe(data =>{
        this.purchases = data;
      })
    }
    

  }

}
