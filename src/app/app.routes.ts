// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// import { HomeComponent } from './views/home/home.component';
// import { LoginComponent } from './views/login/login.component';

// const appRoutes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   // , {
//   //   path: 'error', component: ErrorComponent
//   // },
//   {
//     path: '**',    component: HomeComponent
//   }
// ];
// export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   		from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}