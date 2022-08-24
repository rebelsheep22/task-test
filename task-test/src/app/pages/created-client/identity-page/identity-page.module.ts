import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityPageComponent } from './identity-page.component';
import { IdentityPageRoutingModule } from './identity-page.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [IdentityPageComponent],
  imports: [
    CommonModule,
    IdentityPageRoutingModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class IdentityPageModule { }
