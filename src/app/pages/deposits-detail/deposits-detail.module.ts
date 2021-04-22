import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositsDetailComponent } from './deposits-detail.component';
import { DetailDepositsRoutingModule } from './deposits-detail-routing.module';

@NgModule({
    declarations :[
        DepositsDetailComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DetailDepositsRoutingModule
    ],
    providers: [
    
    ],
})

export class DetailDepositsModule { }