import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListahorasComponent } from './COMPONETS/listahoras/listahoras.component';
import { FormHorasComponent } from './form-horas/form-horas.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.componet';
import {MatDatepickerModule} from '@angular/material/datepicker';
 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    ListahorasComponent,
    FormHorasComponent,
    MenuComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
