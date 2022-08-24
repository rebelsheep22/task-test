import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
