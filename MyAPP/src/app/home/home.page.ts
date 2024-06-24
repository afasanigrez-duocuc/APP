import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../services/user.service';
import { WeatherService } from '../services/weather.service';

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
export class HomePage implements OnInit {

  username: string = '';
  weatherData: any;

  constructor(
    private route: ActivatedRoute, 
    private pickerCtrl: PickerController,
    private toastCtrl: ToastController, 
    public userService: UserService,
    private weatherService: WeatherService
  ) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  ngOnInit() {
    this.fetchWeather();
  }

  ionViewWillEnter() {
    this.username = this.userService.getUsername()!;
  }

  fetchWeather() {
    this.weatherService.getWeather(52.52, 13.41).subscribe(
      (data) => {
        this.weatherData = data.hourly;
        console.log(this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
