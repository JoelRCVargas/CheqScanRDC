import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsConsultComponent } from './deposits-consult.component';

const routes: Routes = [
    {
      path: '',
      component: DepositsConsultComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConsultDepositsRoutingModule { }