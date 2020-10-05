import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import {PlayComponent} from './play/play.component';


const routes: Routes = [
  {
    path : 'login',component:LoginComponent
  },
  {
    path : 'home',component:HomeComponent
  },
  {
    path : 'registration',component:RegistrationComponent
  },
  {
    path : 'dashboard',component:DashboardComponent
  },
  {
    path : 'help',component:HelpComponent
  },
  {
    path : 'play',component:PlayComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,HomeComponent,RegistrationComponent,DashboardComponent,PlayComponent]
