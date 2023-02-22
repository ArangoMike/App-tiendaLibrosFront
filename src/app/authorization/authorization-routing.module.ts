import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserGuard } from '../guards/login-user.guard';
import { UserGuard } from '../guards/user.guard';
import { LobbyComponent } from '../pages/lobby/lobby.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,
  canActivate: [UserGuard]
},
  { path: '', component: LobbyComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
