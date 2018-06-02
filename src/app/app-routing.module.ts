import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/sections/login/login.component';
import { HomeComponent } from 'src/app/sections/home/home.component';
import { CallbackComponent } from 'src/app/sections/callback/callback.component';

import { HomeResolverService } from 'src/app/services/home-resolver.service';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [ AuthenticationGuard ], 
    resolve: { 
      repos: HomeResolverService 
    } 
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
