import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RangeCustomEvent } from '@ionic/angular';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-datos',
  templateUrl: 'datos.page.html',
  styleUrls: ['datos.page.scss'],
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

export class DatosPage {

  username: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  nacimiento: string = '';
  shakeState: string = 'start';
  rangeValue: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private pickerCtrl: PickerController,
    private toastCtrl: ToastController,
    public userService: UserService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  updateRangeValue() {
    let progress = 0;
    if (this.nombre) progress += 25;
    if (this.apellido) progress += 25;
    if (this.educacion) progress += 25;
    if (this.nacimiento) progress += 25;
    this.rangeValue = progress;
  }

  onIonChange(ev: Event) {
    console.log('Cambios en el elemento', (ev as RangeCustomEvent).detail.value);
  }

  registroStorage() {
    localStorage.setItem('token', this.nombre);
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.nacimiento = '';
    this.rangeValue = 0;

    const nombreInput = document.querySelector('#nombreInput');
    const apellidoInput = document.querySelector('#apellidoInput');

    if (nombreInput && apellidoInput) {
      nombreInput.classList.add('shake');
      apellidoInput.classList.add('shake');

      setTimeout(() => {
        nombreInput.classList.remove('shake');
        apellidoInput.classList.remove('shake');
      }, 1000);
    }
  }

  async mostrarInformacion() {
    const toast = await this.toastCtrl.create({
      message: `Nombre: ${this.nombre}, Apellido: ${this.apellido}`,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
}
