import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
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
