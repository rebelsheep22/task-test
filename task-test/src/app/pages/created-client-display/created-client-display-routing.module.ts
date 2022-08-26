import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from 'src/app/helpers/form.guard';

import { CreatedClientDisplayComponent } from './created-client-display.component';

const routes: Routes = [
  {
    path: '',
    component: CreatedClientDisplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedClientDisplayRoutingModule { }
