import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LobbyComponent} from "./pages/lobby/lobby.component";
import {AuthGuard} from "./services/canActivate";

const routes: Routes = [
  { path: 'pages', component: LoginComponent},
  { path: 'hub', component: LobbyComponent, canActivate:[AuthGuard]},
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pages',
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
