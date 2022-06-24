import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiciosService, Estudiantes, Login } from '../../service/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    correo: '',
    contraseña: ''
  }

  constructor(private servicioservice: ServiciosService, private router: Router) { }

  ngOnInit(): void {
  }

  public Login(){
    this.servicioservice.login(this.login)
      .subscribe(
        res => {
          console.log('Ingreso Correcto')
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

          this.router.navigate(['/Registro'])
        },
        err => console.log("error")
      )
  }

}
