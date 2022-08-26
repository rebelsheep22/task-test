import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from './helpers/form.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-form',
    pathMatch: 'full'
  },
  {
    path: 'client-form',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./pages/created-client/created-client.module').then(
          (m)=> m.CreatedClientModule
        )
      }
    ],
    
  },
  {
    path: 'created-client',
    canActivate: [FormGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./pages/created-client-display/created-client-display.module').then(
          (m)=> m.CreatedClientDisplayModule
        )
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
