import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { CreatedClientComponent } from './created-client.component';

const routes: Routes = [
  {
    path: '',
    component: CreatedClientComponent
  },
  {
    path: '',
    children: [{
      path: 'client',
      loadChildren: () => import('./client-page/client-page.module').then((m)=>m.ClientPageModule)
    },
    {
      path: 'address',
      loadChildren: () => import('./address-page/address-page.module').then((m)=>m.AddressPageModule) 
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedClientRoutingModule { }
