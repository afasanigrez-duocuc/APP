import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
