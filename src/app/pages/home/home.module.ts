import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NotificationModule } from 'src/app/components/notification/notification.module';

@NgModule({
    declarations :[
        HomeComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HomeRoutingModule,
        NotificationModule
    ],
    providers: [
    
    ],
})

export class HomeModule { }