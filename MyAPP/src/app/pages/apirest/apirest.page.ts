import { Component, OnInit } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {


  usuarios:any [] = [];

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder,  private apiClient: ApiclientService) {
    this.usuarioForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidop: ['', Validators.required],
      apellidom: ['', Validators.required],
      direccion: ['', Validators.required],
      comuna: ['', Validators.required],
      region: ['', Validators.required],
    })
  }


  ionViewWillEnter(){
    this.getUsuarios();
  }


  ngOnInit() {
  }


  getUsuarios(){
    console.log('Obtener los datos del Usuario');
    this.apiClient.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }


  onSubmit(){
    if(this.usuarioForm.valid){
      const NuevoUsuario = this.usuarioForm.value;
      this.apiClient.addUsuario(NuevoUsuario).subscribe((response) => {
        console.log(response);
        this.getUsuarios();
        this.usuarioForm.reset();
  });
}}


}
