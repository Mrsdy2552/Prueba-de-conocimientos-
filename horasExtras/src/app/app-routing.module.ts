import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormHorasComponent  } from './form-horas/form-horas.component';
import { ListahorasComponent } from  './COMPONETS/listahoras/listahoras.component';


const routes: Routes = [
  { path: 'Form', component: FormHorasComponent },
  { path: 'Listado', component: ListahorasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
