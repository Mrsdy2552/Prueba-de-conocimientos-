import { Component, OnInit, Inject } from '@angular/core';
import { horas_extras} from '../models/horas.model';
import { mySql } from '../SERVER/database.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-horas',
  templateUrl: './form-horas.component.html',
  styleUrls: ['./form-horas.component.css']
})
export class FormHorasComponent implements OnInit {

  constructor(   
    private mySql: mySql ) { }

  horasextras: horas_extras = {
    Documento:   0,
    NOMBRE: '',
    APELLIDO:'',
    FECHA_INICIO: new Date,
    FECHA_FIN:new Date,
    HORA_INICIO_TR: '',
    HORA_FIN_TR:'',
    HORA_INICO_EXTRA:'',
    HORA_FIN_EXTRA:'',
    MOTIVO: '', 
  }

 

  ngOnInit() {
    
  }

  onclickNewhora() {

    this.mySql.salveHora(this.horasextras).subscribe(
  
      res => { 

        Swal.fire({
          title: 'Formulario Guardado',
          icon: 'success'
        })
  
       },
  
      err => { 
        Swal.fire({
          title: 'Formulario No Se guardo',
          icon: 'warning'
        })
      }
   
  
    )
 
  }

}
