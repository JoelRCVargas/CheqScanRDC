import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositsConsultComponent } from './deposits-consult.component';
import { ConsultDepositsRoutingModule } from './deposits-consult-routing.module';

@NgModule({
    declarations :[
        DepositsConsultComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ConsultDepositsRoutingModule
    ],
    providers: [
    
    ],
})

export class ConsultDepositsModule { }