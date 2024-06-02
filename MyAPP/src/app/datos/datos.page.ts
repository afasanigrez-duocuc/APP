import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';


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

  constructor(
    private route: ActivatedRoute, 
    private pickerCtrl: PickerController,
    private toastCtrl: ToastController
  ) {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.nacimiento = '';

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
