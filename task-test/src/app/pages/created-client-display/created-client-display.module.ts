import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedClientDisplayComponent } from './created-client-display.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatedClientDisplayRoutingModule } from './created-client-display-routing.module';



@NgModule({
  declarations: [CreatedClientDisplayComponent],
  imports: [
    CommonModule,
    CreatedClientDisplayRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CreatedClientDisplayModule { }
