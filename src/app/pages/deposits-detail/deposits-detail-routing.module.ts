import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsDetailComponent } from './deposits-detail.component';

const routes: Routes = [
    {
      path: '',
      component: DepositsDetailComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DetailDepositsRoutingModule { }