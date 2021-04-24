import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'home',
    loadChildren: () => {
      return import('./pages/home/home.module').then(m => m.HomeModule);
    }
  },
  {
    path : 'checks',
    loadChildren: () => {
      return import('./pages/check/check.module').then(m => m.CheckModule);
    }
  },
  {
    path : 'deposits',
    loadChildren: () => {
      return import('./pages/deposits/deposits.module').then(m => m.DepositsModule);
    }
  },
  {
    path : 'detail/deposits',
    loadChildren: () => {
      return import('./pages/deposits-detail/deposits-detail.module').then(m => m.DetailDepositsModule);
    }
  },
  {
    path : 'consult/deposits',
    loadChildren: () => {
      return import('./pages/deposits-consult/deposits-consult.module').then(m => m.ConsultDepositsModule);
    }
  },
  {
    path : 'register',
    loadChildren: () => {
      return import('./pages/register/register.module').then(m => m.RegisterModule);
    }
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
