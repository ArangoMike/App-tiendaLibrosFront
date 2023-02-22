import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output, } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductToBuy } from '../models/productToBuy';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  myCart = new BehaviorSubject<Number>(new Number);
  myCart$ = this.myCart.asObservable();

  private url: string = 'http://localhost:8080/api/v1/purchase/';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    })
  };

  constructor(private http: HttpClient) {
    
   }

savePurchase(purchase: Purchase,token: any): Observable<any>{
let direction = this.url + 'create/';
return this.http.post<any>(direction,purchase, {
  responseType: 'text' as 'json',
  headers: {'Authorization': `Bearer ${token}`}
});
}

getPurchases(token:any):Observable<Purchase[]>{
  let direction = this.url + 'getAll/';
  return this.http.get<Purchase[]>(direction,{
    headers: {'Authorization': `Bearer ${token}`}
  });
}
  
getPurchasesUser(token:any):Observable<Purchase[]>{
  let direction = this.url + 'getAllByEmail/';
  return this.http.get<Purchase[]>(direction,{
    headers: {'Authorization': `Bearer ${token}`}
  });
}

}
