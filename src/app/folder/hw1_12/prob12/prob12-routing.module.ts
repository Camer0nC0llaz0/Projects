import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prob12Page } from './prob12.page';

const routes: Routes = [
  {
    path: '',
    component: Prob12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prob12PageRoutingModule {}
