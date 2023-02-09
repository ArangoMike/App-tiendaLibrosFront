import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<Product[]> {
    let direction = this.url + 'getProductPaged/' + page;
    return this.http.get<Product[]>(direction);
  }

  getTotalPages(): Observable<number> {
    let direction = this.url + 'totalPages';
    return this.http.get<number>(direction);
  }


  getCountQuestions(): Observable<number> {
    let direction = this.url + 'countProduct';
    return this.http.get<number>(direction);
  }



}
