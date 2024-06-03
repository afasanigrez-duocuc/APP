import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaisajesPage } from './paisajes.page';

const routes: Routes = [
  {
    path: '',
    component: PaisajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisajesPageRoutingModule {}
