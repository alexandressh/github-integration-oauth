import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { HomeResolverService } from 'src/app/services/home-resolver.service';
import { CallbackComponent } from 'src/app/callback/callback.component';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent, canActivate: [HomeGuard], resolve: { repos: HomeResolverService } },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
