import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController, private userService: UserService) {}

  login() {
    if (this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (this.username && this.password.length === 4) {
      this.userService.setUsername(this.username);
      this.navCtrl.navigateRoot('/home');
    } else {
      alert("Por favor, complete el formulario correctamente");
    }
  }
}
