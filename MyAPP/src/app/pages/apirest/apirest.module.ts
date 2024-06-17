import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApirestPageRoutingModule } from './apirest-routing.module';

import { ApirestPage } from './apirest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApirestPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [ApirestPage]
})
export class ApirestPageModule {}
