import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from 'src/app/helpers/form.guard';
import { CreatedClientComponent } from './created-client.component';

const routes: Routes = [
  {
    path: '',
    component: CreatedClientComponent,
    
  },
  {
    path: '',
    children: [{
      path: 'client',
      loadChildren: () => import('./client-page/client-page.module').then((m)=>m.ClientPageModule),
      data: { animation: 'isClient' },
    },
    {
      path: 'address',
      loadChildren: () => import('./address-page/address-page.module').then((m)=>m.AddressPageModule),
      data: { animation: 'isAddress' },
      canActivate: [FormGuard]
    },
    {
      path: 'identity',
      loadChildren: () => import('./identity-page/identity-page.module').then((m)=>m.IdentityPageModule),
      data: { animation: 'isIdentity' },
      canActivate: [FormGuard]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedClientRoutingModule { }
