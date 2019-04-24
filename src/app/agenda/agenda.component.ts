
import { Component, OnInit } from '@angular/core';
import { Tema } from './../class/tema';
import { Charla } from './../class/charla';
import { Orador } from './../class/orador';
import { ApiService } from '../apiservice/api.service';
import { AgendaService } from '../services/agenda/agenda.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  tabs: any[];
  temas: any;
  charlas: any;
  charlaSeleccionada;

  constructor(private apiService: ApiService, public agendaService: AgendaService) {}

  ngOnInit() {
    this.agendaService.charlasAgendadas$.subscribe(res => {
      this.charlas = res;
    })

   this.charlas = this.agendaService._charlasAgendadas;
  }

  verCharla(charla) {
    this.charlaSeleccionada = charla;
  }

  toggleAgendar(elemento) {
    // TODO: Revisar el agregar y quitar agendados desde la pantalla Mi Agenda
    if(elemento.tipo == "charla")
      this.agendaService.agendarCharla(elemento);
    else
      this.agendaService.agendarActividad(elemento);
  }
}