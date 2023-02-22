import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShoppingCartComponent } from './pages/shoppingCart/shoppingCart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthorizationModule } from './authorization/authorization.module';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LobbyComponent,
    ShopComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthorizationModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
