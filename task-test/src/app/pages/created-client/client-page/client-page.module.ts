import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page.component';
import { ClientPageRoutingModule } from './client-page-routing.module';
import {ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ClientPageComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ClientPageComponent]
})
export class ClientPageModule {}
