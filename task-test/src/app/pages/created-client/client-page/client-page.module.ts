import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page.component';
import { ClientPageRoutingModule } from './client-page-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientPageComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
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
  ],
  exports: [ClientPageComponent]
})
export class ClientPageModule {}
