import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hwprob9PageRoutingModule } from './hwprob9-routing.module';

import { Hwprob9Page } from './hwprob9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hwprob9PageRoutingModule
  ],
  declarations: [Hwprob9Page]
})
export class Hwprob9PageModule {}
