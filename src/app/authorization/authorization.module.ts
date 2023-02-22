import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],providers:[CookieService],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthorizationModule { }
