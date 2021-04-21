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
    path : 'deposits',
    loadChildren: () => {
      return import('./pages/deposits/deposits.module').then(m => m.DepositsModule);
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
