import { Component, OnInit } from '@angular/core';
import { mySql } from '../../SERVER/database.service';


@Component({
  selector: 'app-listahoras',
  templateUrl: './listahoras.component.html',
  styleUrls: ['./listahoras.component.css']
})
export class ListahorasComponent implements OnInit {

  constructor(   
    private mySql: mySql ) { }
    datos: any = [];

  ngOnInit() {

    this.mySql.getHoras().subscribe(
  
      res => { 
       this.datos = res;
        console.error("error", res)

       },
  
      err => { 
        console.error("error", err)
      }
  
  
    )
 
  }

  }

