import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}

  login() {
    if (this.username && this.password && this.username.length >= 3 && this.username.length <= 8 && /^\d{4}$/.test(this.password)) {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
      this.navCtrl.navigateRoot(['/home']);
    } else {
      alert('Por favor, ingrese un usuario alfanumérico de 3 a 8 caracteres y una contraseña numérica de 4 dígitos.');
    }
  }
}