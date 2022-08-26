import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPageComponent } from './address-page.component';
import { AddressPageRoutingModule } from './address-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';0
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [AddressPageComponent],
  imports: [
    CommonModule,
    AddressPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AddressPageModule { }
