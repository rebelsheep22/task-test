import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityPageComponent } from './identity-page.component';
import { IdentityPageRoutingModule } from './identity-page.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [IdentityPageComponent],
  imports: [
    
    CommonModule,
    IdentityPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class IdentityPageModule { }
