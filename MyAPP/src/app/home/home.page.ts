import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickerController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  nacimiento: string = '';

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
      }, 1000); // Duración de la animación
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
