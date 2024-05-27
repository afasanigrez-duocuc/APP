import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  
export class HomePage implements OnInit {
  currentDate: string = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.currentDate = this.datePipe.transform(new Date(), 'fullDate') || '';
  }
}
