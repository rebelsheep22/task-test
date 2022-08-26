import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedClientComponent } from './created-client.component';
import { CreatedClientRoutingModule } from './created-client-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreatedClientComponent],
  imports: [
    CommonModule,
    CreatedClientRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  exports: [CreatedClientComponent]
})
export class CreatedClientModule { }
