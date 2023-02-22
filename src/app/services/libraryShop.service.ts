import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class LibraryShopService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getPage(page: number,token:any): Observable<Product[]> {
    let direction = this.url + 'getProductPaged/' + page;
    return this.http.get<Product[]>(direction,{
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

  getTotalPages(token:any): Observable<number> {
    let direction = this.url + 'totalPages';
    return this.http.get<number>(direction,{
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

  getCountProducts(token:any): Observable<number> {
    let direction = this.url + 'countProduct';
    return this.http.get<number>(direction,{
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

  getProduct(id:any,token:any):Observable<Product>{
    let direction = this.url + 'get/'+ id;
    return this.http.get<Product>(direction,{
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

  updateProduct(product:any, token:any):Observable<any>{
    let direction = this.url +'update';
    return this.http.post<any>(direction,product, {
      responseType: 'text' as 'json',
      headers: {'Authorization': `Bearer ${token}`}
    
    });
  }

  createProduct(product:any, token:any):Observable<any>{
    let direction = this.url +'create';
    return this.http.post<any>(direction,product, {
      responseType: 'text' as 'json',
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

}
