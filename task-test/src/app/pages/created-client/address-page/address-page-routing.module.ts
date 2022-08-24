import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPageComponent } from './address-page.component';
const routes: Routes = [
  {
    path: '',
    component: AddressPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressPageRoutingModule { }
