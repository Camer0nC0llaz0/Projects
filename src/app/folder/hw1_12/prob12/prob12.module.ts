import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prob12PageRoutingModule } from './prob12-routing.module';

import { Prob12Page } from './prob12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prob12PageRoutingModule
  ],
  declarations: [Prob12Page]
})
export class Prob12PageModule {}
