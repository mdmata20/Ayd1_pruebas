import { Component, OnInit } from '@angular/core';

import { Estudiantes, ServiciosService } from '../../service/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  registro: Estudiantes = {
    nombre: '',
    correo: '',
    contraseña: '',
    fechanacimiento:''
  }

  constructor(private servicosSErvice: ServiciosService, private router: Router) { }

  ngOnInit(): void {
  }

  Registro(){
    this.servicosSErvice.Registro(this.registro)
      .subscribe(
        res => {
          console.log("Registro Exitoso")
        },
        err => console.log("Registro Incorrecto")
      )
      
  }

}
