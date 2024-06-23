import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { DbService } from '../db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  isDBReady: boolean = false;

  constructor(private router: Router, 
              private navCtrl: NavController, 
              private userService: UserService, 
              private dbService: DbService) {}

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

  ngOnInit() {
    this.dbService.getIsDBReady().subscribe((isReady) => {
        this.isDBReady = isReady;
          if (isReady) {



          }
      });
    }



}