import { Component, OnInit } from '@angular/core';

/* API */
import { ApiService } from './../apiservice/api.service';
import { AgendaService } from '../services/agenda/agenda.service';

/* Modelos */
import { Tema } from './../class/tema';
import { Charla } from './../class/charla';
import { Orador } from './../class/orador';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  tabs: any[];
  temas1: any;
  temas2: any;
  temas3: any;
  temas4: any;
  charlaSeleccionada;
  searchText;
 
  constructor( private apiService:ApiService, private agendaService: AgendaService ) { 
    this.tabs = [];
    this.tabs[0] = {'title': "Día 1", 'content': "DÍA 1", 'tema': this.temas1};
    this.tabs[1] = {'title': "Día 2", 'content': "DÍA 2", 'tema': this.temas2};
    this.tabs[2] = {'title': "Día 3", 'content': "DÍA 3", 'tema': this.temas3};
    this.tabs[3] = {'title': "Día 4", 'content': "DÍA 4", 'tema': this.temas4};
  }

  ngOnInit() {

    this.traerTemaDia(1,0);
    this.traerTemaDia(2,1);
    this.traerTemaDia(3,2);
    this.traerTemaDia(4,3);

  }

   traerTemaDia(dia,tab) {
        this.apiService.getTemas(dia).subscribe(res => {
      this.tabs[tab].tema = res;
    });

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

  iconoFavorito(charla) : Boolean
  {
    let predicate = this.agendaService.chAgendadas.find(c => c.id === charla.id);
    return predicate != null;
  }

  toggleAgendar(idCharla)
  {
    this.agendaService.agendarCharla(idCharla);
  }
}
