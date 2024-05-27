import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(),
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [DatePipe]
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePageModule {}







