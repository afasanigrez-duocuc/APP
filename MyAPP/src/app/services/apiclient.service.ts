import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {


  HttpOptions = {

    headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
  })
}

  apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) {}

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL + '/post/').pipe(
      retry(3)
    );
  }


  addUsuario(usuario:any):Observable<any>{
    return this.http.post<any>(`${this.apiURL}/post/`, usuario);
  }

}
