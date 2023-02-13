import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';
 

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.scss']
})
export class ShoppingHistoryComponent implements OnInit {
  
  
  purchases: Purchase[] = [];
  page = 1;
constructor(private purchaseService: PurchaseService){
  
}



  ngOnInit(): void {
    this.getAllPurchases();
  }

  getAllPurchases(){
    this.purchaseService.getPurchases().subscribe(data =>{
      this.purchases = data;
    })

  }

}
