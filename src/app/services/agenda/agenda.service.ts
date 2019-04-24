import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../apiservice/api.service';
import { DateDiff } from '../../agenda/DateDiff';
import { Cordova } from 'angular-cordova';
import 'rxjs/add/operator/map';
import { Charla } from './../../class/charla';

declare let cordova: any;


@Injectable()
export class AgendaService implements OnInit {
  public token = new Subject<string>();

  // Observable string streams
  token$ = this.token.asObservable();

  theToken;

  public charlasAgendadas = new Subject<any>();

  charlasAgendadas$ = this.charlasAgendadas.asObservable();

  _charlasAgendadas;

  chAgendadas;

  interval;

  getdate;

  constructor(
    private apiService: ApiService
  ) {
    let self = this;
    var intv = 10;
    var intevaloSeg = 1000; //1 segundo
    var intervaloMin = 1000 * 60;
    self.interval = setInterval(() => {
      self.recordarCharlasComienzan();
    }, intv * intevaloSeg);

  }


  ngOnInit() {
    let self = this;

    self.token$.subscribe(token => {
      self.getCharlasAgendadas();
    })
  }

  setToken(_token) {
    this.token.next(_token);
  }

  getCharlasAgendadas() {
    let self = this;
    return this.token$
      .subscribe(token => {
        self.theToken = token;
        self.apiService
          .get("charlas/usuario/" + token, "")
          .subscribe((data: any[]) => {
            self._charlasAgendadas = data;
            self.chAgendadas = data;
            this.charlasAgendadas.next(data);
          });
      })
  }

  recordarCharlasComienzan() {
    let self = this;
    this._charlasAgendadas.forEach(element => {
      var titulo = element.tituloCharla;
      var time = element.horaCharla;
      var dateNow = new Date();
      var recordatorioTime = new Date(time);
      
      var minutosFaltantes = 0;

      // this.getdate = recordatorioTime.getDate();
      //Si corresponde para el mismo día...
      //var dia = dateNow.getDate();
      var dia = recordatorioTime.getDate(); //Temporal para hacer que pase.


      if (dia == recordatorioTime.getDate()) {
        var tiempoFaltante = new DateDiff(recordatorioTime,dateNow);
        minutosFaltantes = tiempoFaltante.minutes;
        var horasRestantes = tiempoFaltante.hours;
      }

      if (minutosFaltantes == 10 && horasRestantes == 0) {
        Cordova.deviceready.subscribe(() => {
          (<any>cordova).plugins.notification.local.schedule({
            title: "Nuevo Mensaje",
            text: "Dentro de 10 minutos comenzará: " + titulo,
          });
        });
      }
    });
  }

  agendarCharla(charla) {
    let self = this;
    return self.agregarOQuitarFavoritos(self.theToken, charla, "charla");
  }

  agregarOQuitarFavoritos(token, elemento, tipo) {
    let self = this;
    this.apiService.get("usuario/" + token + "/"+ tipo +"/" + elemento.id, "").subscribe((data: string) => {

      let charlas: Array<any> = this._charlasAgendadas;

      if (data == 'Agendado!') {
        charlas.push(elemento);

      } else if (data == 'Quitado de la agenda.') {
        let index = charlas.findIndex(c => c.id == elemento.id)
        charlas.splice(index, 1);
      }

      self.charlasAgendadas.next(charlas);
    });
  }

  agendarActividad(actividad) {
    let self = this;
    return self.agregarOQuitarFavoritos(self.theToken, actividad, "actividad");
  }
}