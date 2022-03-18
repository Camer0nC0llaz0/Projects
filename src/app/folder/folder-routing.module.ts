import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'madlib',
    loadChildren: () => import('./madlib/madlib/madlib.module').then( m => m.MadlibPageModule)
  },
  {
    path: 'hw1prob10',
    loadChildren: () => import('./hw1_10/hw1prob10/hw1prob10.module').then( m => m.Hw1prob10PageModule)
  },
  {
    path: 'hwprob9',
    loadChildren: () => import('./hw_9/hwprob9/hwprob9.module').then( m => m.Hwprob9PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
