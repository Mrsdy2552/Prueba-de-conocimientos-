import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler } from '@angular/common/http';
import { horas_extras } from '../models/horas.model';
 


@Injectable({
    providedIn: 'root'
  })
  export class mySql {
    @Input() envio: string;
    API_URI = 'http://localhost:3000';

    constructor(private http: HttpClient) { }
  
    getHoras() {
        // console.log('Funciona Tablero');
        return this.http.get(`${this.API_URI}/horasExtras`);
    } 
        salveHora(horas: horas_extras) {
    return this.http.post(`${this.API_URI}/horasExtras`, horas);
  }
     
}



