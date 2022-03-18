import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hwprob9Page } from './hwprob9.page';

const routes: Routes = [
  {
    path: '',
    component: Hwprob9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hwprob9PageRoutingModule {}
