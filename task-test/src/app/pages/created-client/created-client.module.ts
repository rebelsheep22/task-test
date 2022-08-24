import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedClientComponent } from './created-client.component';
import { CreatedClientRoutingModule } from './created-client-routing.module';



@NgModule({
  declarations: [CreatedClientComponent],
  imports: [
    CommonModule,
    CreatedClientRoutingModule,
  ],
  exports: [CreatedClientComponent]
})
export class CreatedClientModule { }
