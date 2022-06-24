import { Injectable } from '@angular/core';

import  { HttpClient} from '@angular/common/http'


export interface Estudiantes{
  nombre: string;
  correo: string;
  contraseña: string;
  fechanacimiento: string
}

export interface Login{
  correo: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  login(user: Login){
    return this.http.post<any>(`${this.API_URL}/Login`, user);
  }

  Registro(user: Estudiantes){
    return this.http.post<any>(`${this.API_URL}/Registro`, user);
  }
}
