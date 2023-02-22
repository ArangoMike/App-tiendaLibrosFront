import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PurchaseService } from './services/purchase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private purchaseService: PurchaseService){}


  ngOnInit(): void {


    this.purchaseService.myCart.next(sessionStorage.length);
  }
  title = 'Front-TiendaLibros';
}
