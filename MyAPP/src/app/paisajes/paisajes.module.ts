import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisajesPageRoutingModule } from './paisajes-routing.module';

import { PaisajesPage } from './paisajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisajesPageRoutingModule
  ],
  declarations: [PaisajesPage]
})
export class PaisajesPageModule {}
