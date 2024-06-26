import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'API REST', url: '/apirest', icon: 'list' },
  ];

  username: string = '';
  
  menuType: string = 'overlay';
  constructor() {}
}
