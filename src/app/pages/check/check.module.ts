import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckComponent } from './check.component';
import { CheckRoutingModule } from './check-routing.module';

@NgModule({
    declarations :[
        CheckComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CheckRoutingModule
    ],
    providers: [
    
    ],
})

export class CheckModule { }