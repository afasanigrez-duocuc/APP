import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('shake', [
      state('start', style({ transform: 'translateX(0)' })),
      state('end', style({ transform: 'translateX(0)' })),
      transition('start => end', [
        animate('0.5s', style({ transform: 'translateX(-10px)' })),
        animate('0.5s', style({ transform: 'translateX(10px)' })),
        animate('0.5s', style({ transform: 'translateX(-10px)' })),
        animate('0.5s', style({ transform: 'translateX(10px)' })),
        animate('0.5s', style({ transform: 'translateX(0)' })),
      ]),
    ])
  ]
})

export class HomePage {

  username: string = '';

  constructor(
    private route: ActivatedRoute, 
    private pickerCtrl: PickerController,
    private toastCtrl: ToastController, 
    private userService: UserService
  ) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
  ionViewWillEnter() {
    this.username = this.userService.getUsername();
  }
}
