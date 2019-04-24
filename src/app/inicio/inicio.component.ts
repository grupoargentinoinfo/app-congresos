import { Component, OnInit } from '@angular/core';
import { Cordova } from 'angular-cordova';
import { FirebaseService } from 'angular-cordova/plugin/firebase';
import { AgendaService } from '../services/agenda/agenda.service';

declare let cordova: any;
declare let window: any;
declare let BackKeyDown: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // intervalo;
  interval;

  constructor(
    private firebaseService: FirebaseService,
    private agendaService: AgendaService,
    ) { }

  ngOnInit() {

     let self = this;
    // var intv = 10;
    // var intevaloSeg = 1000; //1 segundo
    // var intervaloMin = 1000 * 60;
     // Get Token y guarda en agenda.service
    self.getTokenFCM();

    // Get de charlas agendadas por un token (el token está en el agenda.service)
    this.agendaService.getCharlasAgendadas();


  }

  getTokenFCM(){
    let self = this;
    Cordova.deviceready.subscribe(() => {
      let FCMPlugin = (<any>window).FirebasePlugin;

      FCMPlugin.getToken(function(token){
          if(token !== null && token !== ''){
          self.agendaService.setToken(token);
          clearInterval(self.interval);
          }
        }, function(e){
            console.error(JSON.stringify(e));
        });
    });    
  }

  irACreditos(){
    document.addEventListener("backbutton", BackKeyDown, true);
    document.getElementById('body2').style.display = 'block'; 
    document.getElementById('body1').style.display = 'none';
  }

  
}
