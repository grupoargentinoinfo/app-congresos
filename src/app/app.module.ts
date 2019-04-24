import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { ApiService } from './apiservice/api.service';
import { AgendaService } from './services/agenda/agenda.service';

/* A partir de aquí agregar los componentes nuevos. */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProgramaComponent } from './programa/programa.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ActividadesCulturalesComponent } from './actividades-culturales/actividades-culturales.component';
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { InfoViajerosComponent } from './info-viajeros/info-viajeros.component';
import { AlojamientoYComidasComponent } from './alojamiento-y-comidas/alojamiento-y-comidas.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { CreditosComponent } from './creditos/creditos.component';

import { DateDiff } from './agenda/DateDiff';

// Plugins
import { FirebaseService } from 'angular-cordova/plugin/firebase';




/* Array con las rutas que resolverá la aplicación desde la raíz */
const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'programa', component: ProgramaComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'actividadesCulturales', component: ActividadesCulturalesComponent },
  { path: 'infoViajeros', component: InfoViajerosComponent },
  { path: 'alojamientoYComidas', component: AlojamientoYComidasComponent },
  { path: 'infoGeneral', component: InfoGeneralComponent },
  { path: 'creditos', component: CreditosComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ProgramaComponent,
    AgendaComponent,
    FilterPipe,
    ActividadesCulturalesComponent,
    InfoViajerosComponent,
    AlojamientoYComidasComponent,
    InfoGeneralComponent,
    CreditosComponent,
  ],
  imports: [
      RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
   // HttpModule
   HttpClientModule
  ],
  /* Listado de servicios */
  providers: [
    // Http,
    ApiService,
    FirebaseService,
    AgendaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
