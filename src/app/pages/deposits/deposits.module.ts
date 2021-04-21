import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotificationModule } from 'src/app/components/notification/notification.module';
import { DepositsComponent } from './deposits.component';
import { DepositsRoutingModule } from './deposits-routing.module';

@NgModule({
    declarations :[
        DepositsComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DepositsRoutingModule
    ],
    providers: [
    
    ],
})

export class DepositsModule { }