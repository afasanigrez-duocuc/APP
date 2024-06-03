import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-paisajes',
  templateUrl: './paisajes.page.html',
  styleUrls: ['./paisajes.page.scss'],
  animations: [
    trigger('pulseAnimation', [
      transition('* => *', [
        animate('0.5s', style({ transform: 'scale(1)' })),
        animate('0.5s', style({ transform: 'scale(1.1)' })),
        animate('0.5s', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})

export class PaisajesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  comprarPostal() {
    alert("Compra confirmada");
  }

}
