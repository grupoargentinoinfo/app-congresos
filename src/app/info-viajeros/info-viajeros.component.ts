import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-info-viajeros',
  templateUrl: './info-viajeros.component.html',
  styleUrls: ['./info-viajeros.component.css']
})
export class InfoViajerosComponent implements OnInit {
  mostrarInfoViajeros:boolean;
  mostrarColectivoHorario:boolean;
  mostrarTrenHorario:boolean;

  constructor() {

  	this.mostrarInfoViajeros = true;
  	this.mostrarColectivoHorario = false;
  	this.mostrarTrenHorario = false;
   }
  ngOnInit() {  }

}
