import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../guards/Adminguard.guard";
import { CreateProductComponent } from "./create-product/create-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ManagementComponent } from "./management/management.component";
import { ShoppingHistoryComponent } from "./shopping-history/shopping-history.component";



const routes: Routes = [
   { path: 'management',
    component: ManagementComponent,
    canActivate: [AdminGuard]
  },
   { path: 'create',
    component: CreateProductComponent,
    canActivate: [AdminGuard]
  },
   { path: 'shoppingHistory', component: ShoppingHistoryComponent},
   { path: 'edit/:id',
    component: EditProductComponent,
    canActivate: [AdminGuard]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminBossRoutingModule { }
  