import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public db!: SQLiteObject;

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toastController: ToastController) { 
    
    this.initDatabase();

  }

    private initDatabase() {
      this.sqlite.create({
        name: 'mydb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        this.db = db;
        this.createTables();
        this.isDBReady.next(true);
        this.presentToast('Database ready');

      }).catch(error => this.presentToast('Error: ' + error));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }

  private createTables() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT, password TEXT, nombre TEXT, apellido TEXT, nivel_de_estudios TEXT, fecha_nacimiento TEXT)', [])
    .then(() => this.presentToast('Table users created'))
    .catch(error => this.presentToast('Error: ' + error));
  }

  insertUser(username: string, password: string, nombre: string, apellido: string, nivel_de_estudios: string, fecha_nacimiento: string) {
    return this.db.executeSql('INSERT INTO users(username, password, nombre, apellido, nivel_de_estudios, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?)', [username, password, nombre, apellido, nivel_de_estudios, fecha_nacimiento])
    .then(() => this.presentToast('User added'))
    .catch(error => this.presentToast('Error: ' + error));
  }

}