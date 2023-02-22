import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  

  isAdmin: String = this.cookieSvc.get('user');

  constructor(private router: Router,
    private cookieSvc:CookieService){}


  canActivate():any{

    if(this.isAdmin.includes('ADMIN')){
      return true;
    }
    this.router.navigate(['/lobby'])
    return false;
  }
  
}
