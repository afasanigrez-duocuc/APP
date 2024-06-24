import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: any;

  constructor(private geolocation: Geolocation, private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadGoogleMaps().then(() => {
        this.loadMap();
      }).catch(err => {
        console.error('Google Maps failed to load', err);
      });
    });
  }

  
  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined' && google.maps) {
        resolve();
      } else {
        (window as any)['mapInit'] = () => {
          resolve();
        };

        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3oFnzAjgMkWXYWrJU9XK088zCPvq-rTs&callback=mapInit';
        script.async = true;
        script.defer = true;
        script.onerror = reject;
        document.head.appendChild(script);
      }
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        center: latLng,
        zoom: 14,
      };

      this.map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

      const marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: 'Mi ubicación'
      });

      google.maps.event.addListener(this.map, 'click', (event: any) => {
        this.addMarker(event.latLng);
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarker(latLng: any) {
    new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Marker'
    });
  }
}
