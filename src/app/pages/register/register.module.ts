import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotificationModule } from 'src/app/components/notification/notification.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
    declarations :[
        RegisterComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RegisterRoutingModule,
        NotificationModule
    ],
    providers: [
    
    ],
})

export class RegisterModule { }