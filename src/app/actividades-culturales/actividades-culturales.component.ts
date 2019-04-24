import { Component, OnInit } from '@angular/core';

/* API */
import { ApiService } from './../apiservice/api.service';
import { AgendaService } from '../services/agenda/agenda.service';

/* Modelos */
import { Tema } from './../class/tema';
import { Charla } from './../class/charla';
import { Orador } from './../class/orador';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-actividades-culturales',
  templateUrl: './actividades-culturales.component.html',
  styleUrls: ['./actividades-culturales.component.css']
})

export class ActividadesCulturalesComponent implements OnInit {
  tabs: any[];
  temas: any;
  charlas: any;
  actividadesCulturales;
  charlaSeleccionada;
  searchText;

  constructor( private apiService:ApiService, private agendaService: AgendaService ) { 
    this.tabs = [];
    this.tabs[0] = {'title': "Día 1", 'content': "DÍA 1", 'actividadesCulturales': []};
    this.tabs[1] = {'title': "Día 2", 'content': "DÍA 2"};
    this.tabs[2] = {'title': "Día 3", 'content': "DÍA 3"};
    this.mostrarCharlas();
  }

  ngOnInit() {
    // this.apiService.getTemas().subscribe(res => {
    //   this.temas = res;
    // });

    this.apiService.get("actividadesCulturales","").subscribe((data: any[]) => {
      this.actividadesCulturales = data;
    });

  }

  mostrarCharlas() {
    /* TODO: Consultar a la API y bindear */
  //  this.apiService.getTemas();
  return this.actividadesCulturales;
  }

  verCharla(charla) {
    this.charlaSeleccionada = charla;
  }

  /* 
  tieneCharlas(todasCharlasFiltradas) espera un array con todas las charlas YA FILTRADAS POR EL FILTER.PIPE
  Cuenta cuantas hay y luego en la vista pregunta si es true o false y lo muestra o no.
  */
  tieneCharlas(todasCharlasFiltradas)
  {
    return todasCharlasFiltradas.length > 0;
  }

  iconoFavorito(actividad) : Boolean
  {
    let predicate = this.agendaService.chAgendadas.find(c => c.id === actividad.id);
    return predicate != null;
  }

  toggleAgendar(actividad)
  {
    this.agendaService.agendarActividad(actividad);
  }
}