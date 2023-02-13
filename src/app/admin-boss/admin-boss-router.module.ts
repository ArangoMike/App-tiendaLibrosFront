import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ManagementComponent } from "./management/management.component";
import { ShoppingHistoryComponent } from "./shopping-history/shopping-history.component";





const routes: Routes = [
   { path: 'management', component: ManagementComponent},
   { path: 'shoppingHistory', component: ShoppingHistoryComponent},
   { path: 'edit/:id', component: EditProductComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminBossRoutingModule { }
  