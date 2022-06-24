import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudiantesComponent } from './component/estudiantes/estudiantes.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: 'Registro',
    component: EstudiantesComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
