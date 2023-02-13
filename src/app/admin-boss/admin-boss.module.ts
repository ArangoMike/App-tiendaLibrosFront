import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management/management.component';
import { AdminBossRoutingModule } from './admin-boss-router.module';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    ManagementComponent,
    ShoppingHistoryComponent,
    EditProductComponent,
    CreateProductComponent,
    
  ],
  imports: [
    CommonModule,
    AdminBossRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminBossModule { }
