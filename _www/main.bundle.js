webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/actividades-culturales/actividades-culturales.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n  text-align: center;\r\n  color: white;\r\n  background-color: #E2AC0F;\r\n  padding: 0.5em;\r\n  -webkit-box-shadow: inset 0px -5px 5px black;\r\n  box-shadow: inset 0px -2px 5px black;\r\n  margin-bottom: -1px;\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.favoritos {\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.horario {\r\n  text-align: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  right: -10%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.listadoActividades {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n.listadoActividades h2 {\r\n  font-size: 1.5em;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .listadoActividades h2 {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n\r\n.listadoActividades li.tema {\r\n  border-bottom: 2px solid #E8E8E8;\r\n}\r\n\r\n.listadoActividades ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}"

/***/ }),

/***/ "./src/app/actividades-culturales/actividades-culturales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pantallaBlanca\">\r\n  <div class=\"headPantalla col-xs-12\">\r\n    <div style=\"text-align: center;\">Programa de actividades culturales</div>\r\n  </div>\r\n      <div>\r\n      <!-- <p> hay q hacer el espacio con css</p> -->\r\n    </div> \r\n          <div class=\"listadoActividades\" *ngIf=\"!charlaSeleccionada\">\r\n            <li *ngFor=\"let actividad of actividadesCulturales\" class=\"item tema row favoritos\">\r\n              <div class=\"col-xs-8\" (click)=\"charlaSeleccionada = actividad\" style=\"right: -15px\">\r\n                <div>{{actividad.tituloCharla}}</div>\r\n                <div>{{actividad.lugar}}</div>\r\n              </div>\r\n              <div class=\"horario col-xs-4\" (click)=\"toggleAgendar(actividad)\">\r\n                <span>{{actividad.horaCharla | date:'H:mm'}}hs</span>\r\n                <span>\r\n                  <i [ngClass]=\"iconoFavorito(actividad) ? 'fas fa-star' : 'far fa-star'\" style=\"color: #E2AC0F;\"></i>\r\n                </span>\r\n              </div>\r\n            </li>\r\n          </div>\r\n</div>\r\n<!-- <pre>{{actividadesCulturales | json}}</pre> -->\r\n<!-- Charla seleccionada -->\r\n<div *ngIf=\"charlaSeleccionada\">\r\n  <button (click)=\"charlaSeleccionada = null\">\r\n    <- Volver</button>\r\n      <h2>{{charlaSeleccionada.tituloCharla}}</h2>\r\n      <span>{{charlaSeleccionada.horaCharla | date:'H:mm'}} hs</span>\r\n      <p>{{charlaSeleccionada.lugar}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/actividades-culturales/actividades-culturales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActividadesCulturalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__ = __webpack_require__("./src/app/apiservice/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__ = __webpack_require__("./src/app/services/agenda/agenda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* API */



var ActividadesCulturalesComponent = (function () {
    function ActividadesCulturalesComponent(apiService, agendaService) {
        this.apiService = apiService;
        this.agendaService = agendaService;
        this.tabs = [];
        this.tabs[0] = { 'title': "Día 1", 'content': "DÍA 1", 'actividadesCulturales': [] };
        this.tabs[1] = { 'title': "Día 2", 'content': "DÍA 2" };
        this.tabs[2] = { 'title': "Día 3", 'content': "DÍA 3" };
        this.mostrarCharlas();
    }
    ActividadesCulturalesComponent.prototype.ngOnInit = function () {
        // this.apiService.getTemas().subscribe(res => {
        //   this.temas = res;
        // });
        var _this = this;
        this.apiService.get("actividadesCulturales", "").subscribe(function (data) {
            console.log(data);
            _this.actividadesCulturales = data;
        });
    };
    ActividadesCulturalesComponent.prototype.mostrarCharlas = function () {
        /* TODO: Consultar a la API y bindear */
        //  this.apiService.getTemas();
        return this.actividadesCulturales;
    };
    ActividadesCulturalesComponent.prototype.verCharla = function (charla) {
        this.charlaSeleccionada = charla;
    };
    /*
    tieneCharlas(todasCharlasFiltradas) espera un array con todas las charlas YA FILTRADAS POR EL FILTER.PIPE
    Cuenta cuantas hay y luego en la vista pregunta si es true o false y lo muestra o no.
    */
    ActividadesCulturalesComponent.prototype.tieneCharlas = function (todasCharlasFiltradas) {
        return todasCharlasFiltradas.length > 0;
    };
    ActividadesCulturalesComponent.prototype.iconoFavorito = function (actividad) {
        var predicate = this.agendaService.chAgendadas.find(function (c) { return c.id === actividad.id; });
        return predicate != null;
    };
    ActividadesCulturalesComponent.prototype.toggleAgendar = function (actividad) {
        console.log("toggleAgendar");
        this.agendaService.agendarActividad(actividad);
    };
    return ActividadesCulturalesComponent;
}());
ActividadesCulturalesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-actividades-culturales',
        template: __webpack_require__("./src/app/actividades-culturales/actividades-culturales.component.html"),
        styles: [__webpack_require__("./src/app/actividades-culturales/actividades-culturales.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */]) === "function" && _b || Object])
], ActividadesCulturalesComponent);

var _a, _b;
//# sourceMappingURL=actividades-culturales.component.js.map

/***/ }),

/***/ "./src/app/agenda/DateDiff.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateDiff; });
/* unused harmony export DateMeasure */
var DateDiff = (function () {
    function DateDiff(date1, date2) {
        this.days = null;
        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.date1 = date1;
        this.date2 = date2;
        var data = new DateMeasure(this.date1 - this.date2);
        this.days = data.days;
        this.hours = data.hours;
        this.minutes = data.minutes;
        this.seconds = data.seconds;
    }
    DateDiff.prototype.diff = function (date1, date2) {
        return new DateDiff(date1, date2);
    };
    ;
    return DateDiff;
}());

var DateMeasure = (function () {
    function DateMeasure(ms) {
        this.seconds = Math.floor(ms / 1000);
        this.minutes = Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;
        this.hours = Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
        this.days = Math.floor(this.hours / 24);
        this.hours = this.hours % 24;
    }
    return DateMeasure;
}());

//# sourceMappingURL=DateDiff.js.map

/***/ }),

/***/ "./src/app/agenda/agenda.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n  text-align: center;\r\n  color: white;\r\n  background-color: #E2AC0F;\r\n  padding: 0.5em;\r\n  -webkit-box-shadow: inset 0px -5px 5px black;\r\n  box-shadow: inset 0px -2px 5px black;\r\n  margin-bottom: -1px;\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.favoritos{\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.horario{\r\n  text-align: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  right: -10%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n    .horario {\r\n        right: -20%;\r\n    }\r\n}\r\n\r\n.letraHorario {\r\n  color: #E2AC0F;\r\n  font-size: 16px;\r\n  margin-top: 7px;\r\n}\r\n\r\n.finCharla{\r\n  margin-bottom: 9px;\r\n}\r\n\r\n.listadoCharlas\r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n.listadoCharlas h2\r\n{\r\n    font-size: 1.5em;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .listadoCharlas h2 {\r\n        font-size: 1.3em;\r\n    }\r\n}\r\n\r\n.listadoCharlas li.tema\r\n{\r\n    border-bottom: 2px solid #E8E8E8;\r\n}\r\n\r\n.listadoCharlas ul\r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}"

/***/ }),

/***/ "./src/app/agenda/agenda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headPantalla col-xs-12\">\r\n  <div class=\"col-xs-offset-4 col-xs-4\" style=\"text-align: center;\">Agenda</div>\r\n</div>\r\n<ul class=\"listadoCharlas\">\r\n  <li *ngFor=\"let charla of charlas\" class=\"col-xs-12 tema favoritos\">\r\n    <ul>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-8\">\r\n            <div class=\"letraHorario\">{{charla.horaCharla | date:'H:mm'}} - {{charla.horaFinCharla | date:'H:mm'}} hs</div>\r\n            <h2 style=\"margin-top: -1px; margin-bottom: -1px;\">{{charla.tituloCharla}}</h2>\r\n            <li *ngFor=\"let orador of charla.oradores\">\r\n              <div>{{orador.nombreOrador}}</div>\r\n            </li>\r\n          </div>\r\n          <div class=\" col-xs-4 horario\">\r\n            <i class=\"fas fa-star\" (click)=\"toggleAgendar(charla)\" style=\"color: #E2AC0F;\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"finCharla\">{{charla.lugar}}</div>\r\n\r\n    </ul>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/agenda/agenda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__ = __webpack_require__("./src/app/apiservice/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__ = __webpack_require__("./src/app/services/agenda/agenda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendaComponent = (function () {
    function AgendaComponent(apiService, agendaService) {
        this.apiService = apiService;
        this.agendaService = agendaService;
    }
    AgendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agendaService.charlasAgendadas$.subscribe(function (res) {
            _this.charlas = res;
        });
        this.charlas = this.agendaService._charlasAgendadas;
    };
    AgendaComponent.prototype.verCharla = function (charla) {
        this.charlaSeleccionada = charla;
    };
    AgendaComponent.prototype.toggleAgendar = function (elemento) {
        // TODO: Revisar el agregar y quitar agendados desde la pantalla Mi Agenda
        console.log("toggleAgendar");
        console.log(elemento);
        if (elemento.tipo == "charla")
            this.agendaService.agendarCharla(elemento);
        else
            this.agendaService.agendarActividad(elemento);
    };
    return AgendaComponent;
}());
AgendaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agenda',
        template: __webpack_require__("./src/app/agenda/agenda.component.html"),
        styles: [__webpack_require__("./src/app/agenda/agenda.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */]) === "function" && _b || Object])
], AgendaComponent);

var _a, _b;
//# sourceMappingURL=agenda.component.js.map

/***/ }),

/***/ "./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #E2AC0F;\r\n    padding: 0.5em;\r\n    -webkit-box-shadow: inset 0px -5px 5px black;\r\n    box-shadow: inset 0px -2px 5px black;\r\n    margin-bottom: -1px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .favoritos{\r\n      overflow: hidden;\r\n      position: relative;\r\n      width: 100%;\r\n  }\r\n  \r\n  .horario{\r\n    text-align: center;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: -10%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  @media only screen and (min-width: 500px) {\r\n      .horario {\r\n          right: -20%;\r\n      }\r\n  }\r\n  \r\n  .letraHorario {\r\n    color: #E2AC0F;\r\n    font-size: 16px;\r\n    margin-top: 7px;\r\n  }\r\n  \r\n  .finCharla{\r\n    margin-bottom: 9px;\r\n  }\r\n  \r\n  .listadoCharlas\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .listadoCharlas h2\r\n  {\r\n      font-size: 1.5em;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n      .listadoCharlas h2 {\r\n          font-size: 1.3em;\r\n      }\r\n  }\r\n  \r\n  .listadoCharlas li.tema\r\n  {\r\n      border-bottom: 2px solid #E8E8E8;\r\n  }\r\n  \r\n  .listadoCharlas ul\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .aloja {\r\n    margin-left: 2px;\r\n    margin-right:  2px;\r\n  }"

/***/ }),

/***/ "./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headPantalla col-xs-12\">\r\n  <div style=\"text-align: center;\">Alojamiento y comidas</div>\r\n</div>\r\n\r\n<div class=\"aloja\">\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  <h3>¿Dónde alojarse durante #XVISAEL?</h3><br />\r\n  En este sitio vas a encontrar tarifas de hoteles con descuento especial para los expositores y asistentes al Congreso:  \r\n  <a  onclick=\"window.open('https://www.ttsviajes.com/congresos/estudioslinguisticos', '_system');\">TSS Viajes - XVI CONGRESO SOCIEDAD ARGENTINA DE ESTUDIOS</a><br />\r\n  Para consultar por traslados al campus desde el centro o desde los aeropuertos a los hoteles: <a href=\"mailto:csaelunsam@ttsviajes.com\">csaelunsam@ttsviajes.com</a><br />\r\n  <br />\r\n  <br />\r\n  <h3>¿Dónde almorzar durante #XVISAEL?</h3><br />\r\n  <h4>Comedor Universitario Mensa-UNSAM <br /></h4>\r\n  Comida saludable, estacional y equilibrada. El comedor está dentro del campus, frente al Instituto de Investigaciones Biotecnológicas (IIB) y al Auditorio Carpa.  <br />\r\n  Ofrece dos posibilidades de menú: vegetariano y clásico. Ambos incluyen: plato caliente, ensalada con tres ingredientes, pan, bebida y fruta. En la página de Facebook del comedor podés consultar el menú del día: \r\n  <a  onclick=\"window.open('https://www.facebook.com/mensacomedor/', '_system');\">www.facebook.com/mensacomedor/</a>\r\n  <br />\r\n  <h4>Bar “Mensita”</h4><br /> \r\n  El bar está ubicado en el edificio de Humanidades.<br />\r\n  Ofrece el mismo menú que Mensa, pero solo la opción vegetariana, con ensalada (3 gustos) y bebida. En este bar también se venden sandwiches, empanadas y ensaladas, entre otras opciones.<br />\r\n\r\n  <h4>Parrilla “El encuentro” </h4><br />\r\n  Parrilla. <br />\r\n  25 de Mayo 1300 (justo enfrente del Campus), San Martín, Buenos Aires<br />\r\n  <br />\r\n  <h4>Lo de Carlitos</h4><br />\r\n  Restaurante. Comida rápida.<br />\r\n  Moreno 3273, San Martín, Buenos Aires<br />\r\n  <br />\r\n  <h4>San Antonio</h4><br />\r\n  Pizzería.<br />\r\n  25 de Mayo 1900, San Martín,<br /> Buenos Aires<br />\r\n   <br />\r\n  <h4>Da Marchello</h4><br />\r\n  Restaurante italiano.<br />\r\n  Salguero 2117, San Martín, Buenos Aires<br />\r\n   <br />\r\n  <h4>Rouxe Resto</h4><br />\r\n  Restaurante. Pub/bar.<br />\r\n  25 de Mayo 1908, San Martín, Buenos Aires<br />\r\n   <br />\r\n  <h4>Ayres de Campo</h4><br />\r\n  Restaurante argentino. Parrilla.<br />\r\n  Ayacucho 2164, 1650 San Martin, Buenos Aires<br />\r\n   <br />\r\n  <h4>El encanto</h4><br />\r\n  Restaurante Peruano<br />\r\n  Sarmiento 2052, San Martin, Buenos Aires<br />\r\n   <br />\r\n  <h4>La simoqueña</h4><br />\r\n  Pizza y empanadas para llevar.<br />\r\n  25 de Mayo 1962, San Martín, Buenos Aires<br />\r\n  <br />\r\n   \r\n  <h4>La cocina de mamá</h4><br />\r\n  Restaurante de comida para llevar<br />\r\n  Perdriel 3445, San Martín, Buenos Aires<br />\r\n  <br />\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlojamientoYComidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlojamientoYComidasComponent = (function () {
    function AlojamientoYComidasComponent() {
    }
    AlojamientoYComidasComponent.prototype.ngOnInit = function () { };
    return AlojamientoYComidasComponent;
}());
AlojamientoYComidasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alojamiento-y-comidas',
        template: __webpack_require__("./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.html"),
        styles: [__webpack_require__("./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlojamientoYComidasComponent);

//# sourceMappingURL=alojamiento-y-comidas.component.js.map

/***/ }),

/***/ "./src/app/apiservice/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getTemas = function (dia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/temas?dia=" + dia);
    };
    ApiService.prototype.get = function (recurso, params) {
        params = params != "" ? "?" + params : "";
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/" + recurso + "" + params);
        // .map(r => r.json());
        // this.results = JSON.stringify(this.temas);
        // return this.results;
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.bodyContent{\r\n -webkit-box-flex: 1;\r\n     -ms-flex: 1;\r\n         flex: 1;\r\n}\r\n\r\n@media only screen and (min-width: 200px) {\r\n  .logoSeles {\r\n    max-width: 50%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 400px) {\r\n  .logoSeles {\r\n    max-width: 60%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .logoSeles {\r\n    max-width: 40%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .logoSeles {\r\n    max-width: 40%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 990px) {\r\n  .logoSeles {\r\n    max-width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 990px) {\r\n  .logoSeles {\r\n    max-width: 35%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1050px) {\r\n  .logoSeles {\r\n    max-width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1110px) {\r\n  .logoSeles {\r\n    max-width: 25%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1190px) {\r\n  .logoSeles {\r\n    max-width: 30%;\r\n  }\r\n}\r\n\r\n.foot {\r\n  width: auto;\r\n  height: 3%;\r\n}\r\n\r\n.imgFoot {\r\n  float: left;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.logoSeles {\r\n  position: relative;\r\n  margin-top: 10%;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-image: url('logo-sael.8cc2bf8e81fcf282d3c8.png');\r\n}\r\n\r\n.opacity {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.fondo {\r\n  position: absolute;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100% 100%; \r\n}\r\n\r\nh1\r\n{\r\n  font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"app\">\r\n\r\n    <app-header [title]=title></app-header>\r\n\r\n    <div class=\"bodyContent\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n    <div class=\"foot\">\r\n      <div class=\"logoSeles\">\r\n        <img src=\"assets/img/logo-sael.png\" class=\"img-fluid imgFoot\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "Inicio";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.clickButton = function () {
        alert("Button clicked");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiservice_api_service__ = __webpack_require__("./src/app/apiservice/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_agenda_agenda_service__ = __webpack_require__("./src/app/services/agenda/agenda.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inicio_inicio_component__ = __webpack_require__("./src/app/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__programa_programa_component__ = __webpack_require__("./src/app/programa/programa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agenda_agenda_component__ = __webpack_require__("./src/app/agenda/agenda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actividades_culturales_actividades_culturales_component__ = __webpack_require__("./src/app/actividades-culturales/actividades-culturales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__info_viajeros_info_viajeros_component__ = __webpack_require__("./src/app/info-viajeros/info-viajeros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__alojamiento_y_comidas_alojamiento_y_comidas_component__ = __webpack_require__("./src/app/alojamiento-y-comidas/alojamiento-y-comidas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__info_general_info_general_component__ = __webpack_require__("./src/app/info-general/info-general.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__creditos_creditos_component__ = __webpack_require__("./src/app/creditos/creditos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_cordova_plugin_firebase__ = __webpack_require__("./node_modules/angular-cordova/plugin/firebase.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { Http, Response, RequestOptions, Headers } from '@angular/http';


/* A partir de aquí agregar los componentes nuevos. */








// import { HttpModule } from "@angular/http";





// Plugins

/* Array con las rutas que resolverá la aplicación desde la raíz */
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'programa', component: __WEBPACK_IMPORTED_MODULE_9__programa_programa_component__["a" /* ProgramaComponent */] },
    { path: 'agenda', component: __WEBPACK_IMPORTED_MODULE_10__agenda_agenda_component__["a" /* AgendaComponent */] },
    { path: 'actividadesCulturales', component: __WEBPACK_IMPORTED_MODULE_11__actividades_culturales_actividades_culturales_component__["a" /* ActividadesCulturalesComponent */] },
    { path: 'infoViajeros', component: __WEBPACK_IMPORTED_MODULE_15__info_viajeros_info_viajeros_component__["a" /* InfoViajerosComponent */] },
    { path: 'alojamientoYComidas', component: __WEBPACK_IMPORTED_MODULE_16__alojamiento_y_comidas_alojamiento_y_comidas_component__["a" /* AlojamientoYComidasComponent */] },
    { path: 'infoGeneral', component: __WEBPACK_IMPORTED_MODULE_17__info_general_info_general_component__["a" /* InfoGeneralComponent */] },
    { path: 'creditos', component: __WEBPACK_IMPORTED_MODULE_18__creditos_creditos_component__["a" /* CreditosComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__inicio_inicio_component__["a" /* InicioComponent */],
            __WEBPACK_IMPORTED_MODULE_9__programa_programa_component__["a" /* ProgramaComponent */],
            __WEBPACK_IMPORTED_MODULE_10__agenda_agenda_component__["a" /* AgendaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_11__actividades_culturales_actividades_culturales_component__["a" /* ActividadesCulturalesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__info_viajeros_info_viajeros_component__["a" /* InfoViajerosComponent */],
            __WEBPACK_IMPORTED_MODULE_16__alojamiento_y_comidas_alojamiento_y_comidas_component__["a" /* AlojamientoYComidasComponent */],
            __WEBPACK_IMPORTED_MODULE_17__info_general_info_general_component__["a" /* InfoGeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_18__creditos_creditos_component__["a" /* CreditosComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            // HttpModule
            __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
        ],
        /* Listado de servicios */
        providers: [
            // Http,
            __WEBPACK_IMPORTED_MODULE_4__apiservice_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_19_angular_cordova_plugin_firebase__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_5__services_agenda_agenda_service__["a" /* AgendaService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/creditos/creditos.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #E2AC0F;\r\n    padding: 0.5em;\r\n    -webkit-box-shadow: inset 0px -5px 5px black;\r\n    box-shadow: inset 0px -2px 5px black;\r\n    margin-bottom: -1px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .favoritos{\r\n      overflow: hidden;\r\n      position: relative;\r\n      width: 100%;\r\n  }\r\n  \r\n  .horario{\r\n    text-align: center;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: -10%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  @media only screen and (min-width: 500px) {\r\n      .horario {\r\n          right: -20%;\r\n      }\r\n  }\r\n  \r\n  .letraHorario {\r\n    color: #E2AC0F;\r\n    font-size: 16px;\r\n    margin-top: 7px;\r\n  }\r\n  \r\n  .finCharla{\r\n    margin-bottom: 9px;\r\n  }\r\n  \r\n  .listadoCharlas\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .listadoCharlas h2\r\n  {\r\n      font-size: 1.5em;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n      .listadoCharlas h2 {\r\n          font-size: 1.3em;\r\n      }\r\n  }\r\n  \r\n  .listadoCharlas li.tema\r\n  {\r\n      border-bottom: 2px solid #E8E8E8;\r\n  }\r\n  \r\n  .listadoCharlas ul\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  h1, h2\r\n{\r\n  font-size: 18px;\r\n}\r\n  \r\n  button\r\n{\r\n  border: none;\r\n  padding: 13px 28px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  background-color: #e2ac0f;\r\n  border-radius: 4px;\r\n  color: #FFF;\r\n}"

/***/ }),

/***/ "./src/app/creditos/creditos.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://code.createjs.com/createjs-2015.11.26.min.js\"></script>\r\n<script src=\"assets/js/creditos.js\"></script>\r\n<script>\r\nvar canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;\r\nfunction init() {\r\n  canvas = document.getElementById(\"canvas\");\r\n  anim_container = document.getElementById(\"animation_container\");\r\n  dom_overlay_container = document.getElementById(\"dom_overlay_container\");\r\n  images = images||{};\r\n  ss = ss||{};\r\n  var loader = new createjs.LoadQueue(false);\r\n  loader.addEventListener(\"fileload\", handleFileLoad);\r\n  loader.addEventListener(\"complete\", handleComplete);\r\n  loader.loadManifest(lib.properties.manifest);\r\n}\r\nfunction handleFileLoad(evt) {  \r\n  if (evt.item.type == \"image\") { images[evt.item.id] = evt.result; } \r\n}\r\nfunction handleComplete(evt) {\r\n  //This function is always called, irrespective of the content. You can use the variable \"stage\" after it is created in token create_stage.\r\n  var queue = evt.target;\r\n  var ssMetadata = lib.ssMetadata;\r\n  for(i=0; i<ssMetadata.length; i++) {\r\n    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {\"images\": [queue.getResult(ssMetadata[i].name)], \"frames\": ssMetadata[i].frames} )\r\n  }\r\n  exportRoot = new lib.creditos();\r\n  stage = new createjs.Stage(canvas);\r\n  stage.addChild(exportRoot); \r\n  //Registers the \"tick\" event listener.\r\n  fnStartAnimation = function() {\r\n    createjs.Ticker.setFPS(lib.properties.fps);\r\n    createjs.Ticker.addEventListener(\"tick\", stage);\r\n  }     \r\n  //Code to support hidpi screens and responsive scaling.\r\n  function makeResponsive(isResp, respDim, isScale, scaleType) {    \r\n    var lastW, lastH, lastS=1;    \r\n    window.addEventListener('resize', resizeCanvas);    \r\n    resizeCanvas();   \r\n    function resizeCanvas() {     \r\n      var w = lib.properties.width, h = lib.properties.height;      \r\n      var iw = window.innerWidth, ih=window.innerHeight;      \r\n      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;      \r\n      if(isResp) {                \r\n        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    \r\n          sRatio = lastS;                \r\n        }       \r\n        else if(!isScale) {         \r\n          if(iw<w || ih<h)            \r\n            sRatio = Math.min(xRatio, yRatio);        \r\n        }       \r\n        else if(scaleType==1) {         \r\n          sRatio = Math.min(xRatio, yRatio);        \r\n        }       \r\n        else if(scaleType==2) {         \r\n          sRatio = Math.max(xRatio, yRatio);        \r\n        }     \r\n      }     \r\n      canvas.width = w*pRatio*sRatio;     \r\n      canvas.height = h*pRatio*sRatio;\r\n      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';       \r\n      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';\r\n      stage.scaleX = pRatio*sRatio;     \r\n      stage.scaleY = pRatio*sRatio;     \r\n      lastW = iw; lastH = ih; lastS = sRatio;   \r\n    }\r\n  }\r\n  makeResponsive(true,'both',true,1); \r\n  fnStartAnimation();\r\n}\r\n\r\ndocument.body.onload = function() { console.log(\"init!\"); init() };\r\n\r\n</script>\r\n\r\n<div id=\"animation_container\" style=\"background-color:rgba(255, 255, 255, 1.00); width:1280px; height:1920px\">\r\n  <canvas id=\"canvas\" width=\"1280\" height=\"1920\" style=\"position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);\"></canvas>\r\n  <div id=\"dom_overlay_container\" style=\"pointer-events:none; overflow:hidden; width:1280px; height:1920px; position: absolute; left: 0px; top: 0px; display: block;\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/creditos/creditos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditosComponent = (function () {
    function CreditosComponent() {
    }
    CreditosComponent.prototype.ngOnInit = function () { };
    return CreditosComponent;
}());
CreditosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-creditos',
        template: __webpack_require__("./src/app/creditos/creditos.component.html"),
        styles: [__webpack_require__("./src/app/creditos/creditos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreditosComponent);

//# sourceMappingURL=creditos.component.js.map

/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (charlas, searchText) {
        if (!charlas)
            return [];
        if (!searchText)
            return charlas;
        return charlas.filter(function (it) {
            return estaEnCharla(it, searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

function estaEnCharla(it, searchText) {
    return matches(it.tituloCharla, searchText)
        || matches(it.tema, searchText);
    // || it.oradores.some(orador => matches(orador.nombreOrador, searchText)) ;
}
function matches(text, searchText) {
    return text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
}
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n\twidth: 70%;\r\n\ttext-align: center;\r\n}\r\n\r\n.navbar-toggle {\r\n\tfloat: left;\r\n\tmargin-left: 15px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" id=\"toggle-button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">{{title}}</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/\">Inicio</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/infoGeneral\">Información general sobre<br>el Congreso</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/programa\">Programa del Congreso</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/actividadesCulturales\">Programa de actividades culturales</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/infoViajeros\">Cómo llegar</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/alojamientoYComidas\">Alojamiento y comidas</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a routerLink=\"/agenda\">Mi agenda</a></li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            var element = document.getElementById('toggle-button');
            if (element.attributes.getNamedItem('aria-expanded').value === "true") {
                element.click();
            }
        });
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/info-general/info-general.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #E2AC0F;\r\n    padding: 0.5em;\r\n    -webkit-box-shadow: inset 0px -5px 5px black;\r\n    box-shadow: inset 0px -2px 5px black;\r\n    margin-bottom: -1px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .favoritos{\r\n      overflow: hidden;\r\n      position: relative;\r\n      width: 100%;\r\n  }\r\n  \r\n  .horario{\r\n    text-align: center;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: -10%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  @media only screen and (min-width: 500px) {\r\n      .horario {\r\n          right: -20%;\r\n      }\r\n  }\r\n  \r\n  .letraHorario {\r\n    color: #E2AC0F;\r\n    font-size: 16px;\r\n    margin-top: 7px;\r\n  }\r\n  \r\n  .finCharla{\r\n    margin-bottom: 9px;\r\n  }\r\n  \r\n  .listadoCharlas\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .listadoCharlas h2\r\n  {\r\n      font-size: 1.5em;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n      .listadoCharlas h2 {\r\n          font-size: 1.3em;\r\n      }\r\n  }\r\n  \r\n  .listadoCharlas li.tema\r\n  {\r\n      border-bottom: 2px solid #E8E8E8;\r\n  }\r\n  \r\n  .listadoCharlas ul\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .infoGral {\r\n    margin-left: 2px;\r\n    margin-right:  2px;\r\n  }"

/***/ }),

/***/ "./src/app/info-general/info-general.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headPantalla col-xs-12\">\r\n      <div style=\"text-align: center;\">Información general sobre el Congreso</div>\r\n      <div class=\"col-xs-4\" style=\"text-align: right;\">\r\n        <a routerLink=\"/\"></a>\r\n\t  </div>\r\n</div>\r\n<div class=\"infoGral\">\r\n\t<br/>\r\n\t<br/>\r\n\t<br/>\r\n\t<h3>¡Bienvenidxs al XVI Congreso de la Sociedad Argentina de Estudios Lingüísticos!</h3>\r\n\r\n\t<br />\r\n\tComo en las reuniones anteriores, esperamos pasar cuatro días de intercambio y aprendizaje entre colegas y amigxs, esta vez en la Universidad Nacional de San Martín.<br />\r\n\tToda la información sobre el programa, las sedes y los horarios podrá consultarse en esta misma aplicación, incluyendo tu agenda personalizada de las exposiciones a las que quieras asistir.<br />\r\n\tTambién, los invitamos a seguirnos en nuestras redes sociales para intercambiar noticias y recibir información adicional sobre el Congreso: <strong>#XVISAEL2018</strong><br />\r\n\tPara consultas puntuales o información no contemplada aquí, podrás contactarnos en la mesa de acreditación o enviarnos un e-mail a: <a href=\"mailto:XVISAEL@unsam.edu.ar\">XVISAEL@unsam.edu.ar</a> <br />\r\n\t¡Nos vemos!<br />\r\n\t<br />\r\n\t<br />\r\n\t<h3>#XVISAEL2018</h3><br />\r\n\t<h5>Comisión Organizadora</h5><br />\r\n\t<p>\r\n\t   <img src=\"./assets/img/unsam.png\" height=\"32\" width=\"32\">              \r\n\t\t<a  onclick=\"window.open('http://www.unsam.edu.ar/escuelas/humanidades/centros/celes/', '_system');\">Centro de Estudios del Lenguaje en Sociedad (CELES)</a><br />\r\n\t</p>\r\n\t<p>\r\n\t<p>\r\n\t   <img src=\"./assets/img/unsam.png\" height=\"32\" width=\"32\">\r\n\t    <a  onclick=\"window.open('http://www.unsam.edu.ar/', '_system');\">Universidad Nacional de San Martín</a><br />\r\n\t</p>\r\n\t<p>\r\n\t   <img src=\"./assets/img/instagram.png\" height=\"32\" width=\"32\">\r\n\t    <a  onclick=\"window.open('https://www.instagram.com/celes_unsam/', '_system');\">@celes_unsam</a> <br />\r\n\t</p>\t\r\n\t<p>\r\n\t   <img src=\"./assets/img/twitter.png\" height=\"32\" width=\"32\"> \r\n\t    <a  onclick=\"window.open('https://twitter.com/celes_unsam/', '_system');\">@celes_unsam</a><br />\r\n\t</p>\r\n\t<p>\r\n\t   <img src=\"./assets/img/facebook.png\" height=\"32\" width=\"32\">    \r\n\t    <a  onclick=\"window.open('https://es-la.facebook.com/celes.unsam/', '_system');\">Centro de Estudios del Lenguaje en Sociedad UNSAM</a><br />\r\n\t</p> \r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/info-general/info-general.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoGeneralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoGeneralComponent = (function () {
    function InfoGeneralComponent() {
    }
    InfoGeneralComponent.prototype.ngOnInit = function () { };
    return InfoGeneralComponent;
}());
InfoGeneralComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-general',
        template: __webpack_require__("./src/app/info-general/info-general.component.html"),
        styles: [__webpack_require__("./src/app/info-general/info-general.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoGeneralComponent);

//# sourceMappingURL=info-general.component.js.map

/***/ }),

/***/ "./src/app/info-viajeros/info-viajeros.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #E2AC0F;\r\n    padding: 0.5em;\r\n    -webkit-box-shadow: inset 0px -5px 5px black;\r\n    box-shadow: inset 0px -2px 5px black;\r\n    margin-bottom: -1px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .favoritos{\r\n      overflow: hidden;\r\n      position: relative;\r\n      width: 100%;\r\n  }\r\n  \r\n  .horario{\r\n    text-align: center;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: -10%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  @media only screen and (min-width: 500px) {\r\n      .horario {\r\n          right: -20%;\r\n      }\r\n  }\r\n  \r\n  .letraHorario {\r\n    color: #E2AC0F;\r\n    font-size: 16px;\r\n    margin-top: 7px;\r\n  }\r\n  \r\n  .finCharla{\r\n    margin-bottom: 9px;\r\n  }\r\n  \r\n  .listadoCharlas\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  .listadoCharlas h2\r\n  {\r\n      font-size: 1.5em;\r\n  }\r\n  \r\n  @media only screen and (max-width: 500px) {\r\n      .listadoCharlas h2 {\r\n          font-size: 1.3em;\r\n      }\r\n  }\r\n  \r\n  .listadoCharlas li.tema\r\n  {\r\n      border-bottom: 2px solid #E8E8E8;\r\n  }\r\n  \r\n  .listadoCharlas ul\r\n  {\r\n      padding: 0;\r\n      margin: 0;\r\n      list-style: none;\r\n  }\r\n  \r\n  h1, h2\r\n{\r\n  font-size: 18px;\r\n}\r\n  \r\n  button\r\n{\r\n  border: none;\r\n  padding: 13px 28px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  background-color: #e2ac0f;\r\n  border-radius: 4px;\r\n  color: #FFF;\r\n}"

/***/ }),

/***/ "./src/app/info-viajeros/info-viajeros.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"headPantalla col-xs-12\">\r\n      <div style=\"text-align: center;\">Cómo llegar</div>\r\n    </div>\r\n\r\n    <div class=\"grid9\"> \r\n      <div id=\"contenido\" style=\"border-left: 1px solid #2C88CD\" class=\"color_oficial\">\r\n        \r\n        <div *ngIf=\"mostrarInfoViajeros\">\r\n           <!-- InstanceBeginEditable name=\"contenido\" -->\r\n\r\n            <div class=\"grid10\">\r\n              <h1>C&oacute;mo llegar Campus Miguelete</h1>\r\n            </div>\r\n\r\n            <div class=\"grid2\">\r\n              <div style=\"padding:6px; border: 1px solid #004e7d; border-radius: 10px; background-color:#EEEEEE; text-align:center;\">\r\n                <a href=\"http://www.unsam.edu.ar/home/llamadas-urgencia.asp\">CUIDADOS\r\n                  <br /> EN EL CAMPUS</a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid12\">\r\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.820074559078!2d-58.52283759626938!3d-34.57978624801553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x84b4e591f54ec061!2sUniversidad+Nacional+de+San+Mart%C3%ADn+(UNSAM)!5e0!3m2!1ses!2sar!4v1463684673653\"\r\n                width=\"100%\" height=\"320\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n              <br />\r\n            </div>\r\n\r\n            <div class=\"clear\"></div>\r\n\r\n            <div class=\"grid12\">\r\n              <div style=\"background-color:#EEE; padding:5px; border-top: #DdD thin solid; border-bottom:#DDD thin solid; border-left:#DDD thin solid\">\r\n                <strong>Campus Miguelete, </strong>\r\n                <br /> Direcci&oacute;n: 25 de Mayo 1300, San Martin, Buenos Aires.\r\n                <br /> Tel&eacute;fonos: 2033-1400 (Informes)\r\n                <br />\r\n                <!-- <a href=\"http://www.unsam.edu.ar/home/contacto.asp\">Ver otros contactos por &aacute;rea</a> -->\r\n                <br />\r\n\r\n\r\n                <div style=\"background-color:#EEE; padding:0px 5px 5px 5px; border-top: #DdD thin solid; border-bottom:#DDD thin solid; border-left:#DDD thin solid\">\r\n                  <strong>Tren:\r\n                    <br />\r\n                  </strong> L&iacute;nea Mitre (Ramal Jos&eacute; Le&oacute;n Suarez)\r\n                  <br /> Estaci&oacute;n San Mart&iacute;n o estaci&oacute;n Miguelete\r\n                  <br />\r\n                  <strong>Colectivos:\r\n                    <br />\r\n                  </strong> 21, 28, 57, 78, 87, 106, 117, 123, 161, 169, 176\r\n                </div>\r\n\r\n                <br />\r\n\r\n\r\n                <div style=\"background-color:#EEE; padding:0px 5px 5px 5px; border-top: #DdD thin solid; border-bottom:#DDD thin solid; border-left:#DDD thin solid\">\r\n                  <strong>En auto:\r\n                    <br />\r\n                  </strong> Desde zona norte:\r\n                  <br /> Av. General Paz. Bajada est. Miguelete - INTI, seguir por colectora hasta 25 de Mayo, doblar a la derecha hasta\r\n                  Francia.\r\n                  <br /> Desde zona Sur:\r\n                  <br /> Av. General Paz. Bajada San Mart&iacute;n, seguir por colectora y tomar el puente que cruza a la Av. 25 de Mayo.\r\n                  Continuar hasta Francia.\r\n                </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"clear\"></div>\r\n\r\n                <!-- <img [src]=\"./img/mapCampus.gif\" alt=\"\" width=\"370\" height=\"347\" border=\"1\"> <br /> -->\r\n                <br />\r\n                <div style=\"padding:0px 5px 5px 5px;\">\r\n                <h1>PLANO DEL CAMPUS</h1>\r\n                <p>\r\n                  <a href=\"./assets/img/mapa_Campus.gif\">\r\n                    <img src=\"./assets/img/mapa_Campus.gif\" width=\"1050\" height=\"411\"/>\r\n                  </a>\r\n                </p>\r\n\r\n                <p>&nbsp;</p>\r\n                <h1>Colectivo gratis</h1>\r\n                La Universidad ofrece un servicio gratuito de transporte que conecta desde la ma&ntilde;ana hasta la noche al Campus Miguelete\r\n                con las estaciones Miguelete y San Mart&iacute;n del ferrocarril Mitre, la Escuela de Econom&iacute;a y Negocios y\r\n                otras sedes locales de la Universidad.\r\n                <br>\r\n                <button (click)=\"mostrarInfoViajeros = false; mostrarColectivoHorario = true \"> Horarios y paradas</button> \r\n                <p>&nbsp; </p>\r\n                <h1>Minitren gratis</h1>\r\n\r\n                Pasa de lunes a viernes por tres estaciones: Migueletes, próxima a la del tren Mitre; Sociales y Tornavía.\r\n                <br /> La frecuencia es de 16 veces por día, aproximadamente dos veces por hora, con un receso entre las 13 y las 16.\r\n                <br /> La salida desde Miguelete suele ser después de que llega la formación más próxima del tren Mitre, por lo que su horario\r\n                es más flexible.\r\n                <br>\r\n                <button (click)=\"mostrarInfoViajeros = false; mostrarTrenHorario = true \"> Horarios y paradas</button> \r\n                <p>&nbsp;</p>\r\n          </div>\r\n              </div>\r\n           </div>\r\n          <div *ngIf=\"mostrarColectivoHorario ==true \">\r\n            <button (click)=\"mostrarColectivoHorario = false; mostrarInfoViajeros = true \">\r\n              <- Volver</button>\r\n              <table width=\"100%\" border=\"0\" cellpadding=\"5\" cellspacing=\"2\" style=\"font-size: 10px\">\r\n              <colgroup><col width=\"66\" span=\"9\"> </colgroup><tbody><tr>\r\n              <td colspan=\"10\" align=\"left\"><h1><strong>HORARIOS</strong></h1>\r\n                   <strong>Lunes a viernes</strong></td>\r\n              </tr>\r\n         \r\n              <tr>\r\n                <td colspan=\"10\"><h1>TURNO MAÑANA</h1></td>\r\n              </tr>\r\n              <tr>\r\n                <th width=\"11%\" align=\"center\" bgcolor=\"#DFDFDF\">SALIDA </th>\r\n                <th width=\"10%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"10%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"9%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"11%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"10%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"9%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"10%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"9%\" align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th width=\"11%\" align=\"center\" bgcolor=\"#DFDFDF\">LLEGADA</th>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM    Tornavía</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong> Sociales<br>\r\n                  M.         Asunta</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Estación    Miguelete</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Parque Yrigoyen</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM <br>\r\n                  Av. \r\n                  25 de Mayo</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Saavedra y    Moreno&nbsp;</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Mitre y <br>\r\n                  Tucumán</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Economia<br>\r\n                  y    Negocios</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Ayacucho<br>\r\n            y Matheu</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM<br>\r\n                  Tornavía</strong></td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">7.30</td>\r\n                <td align=\"center\">7.34</td>\r\n                <td align=\"center\">7.35</td>\r\n                <td align=\"center\">7.38</td>\r\n                <td align=\"center\">7.40</td>\r\n                <td align=\"center\">7.42</td>\r\n                <td align=\"center\">7.45</td>\r\n                <td align=\"center\">7.47</td>\r\n                <td align=\"center\">7.50</td>\r\n                <td align=\"center\">8.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">8.10</td>\r\n                <td align=\"center\">8.14</td>\r\n                <td align=\"center\">8.15</td>\r\n                <td align=\"center\">8.18</td>\r\n                <td align=\"center\">8.20</td>\r\n                <td align=\"center\">8.22</td>\r\n                <td align=\"center\">8.25</td>\r\n                <td align=\"center\">8.27</td>\r\n                <td align=\"center\">8.30</td>\r\n                <td align=\"center\">8.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">9.10</td>\r\n                <td align=\"center\">9.14</td>\r\n                <td align=\"center\">9.15</td>\r\n                <td align=\"center\">9.18</td>\r\n                <td align=\"center\">9.20</td>\r\n                <td align=\"center\">9.22</td>\r\n                <td align=\"center\">9.25</td>\r\n                <td align=\"center\">9.27</td>\r\n                <td align=\"center\">9.30</td>\r\n                <td align=\"center\">9.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">11.10</td>\r\n                <td align=\"center\">11.14</td>\r\n                <td align=\"center\">11.15</td>\r\n                <td align=\"center\">11.18</td>\r\n                <td align=\"center\">11.20</td>\r\n                <td align=\"center\">11.22</td>\r\n                <td align=\"center\">11.25</td>\r\n                <td align=\"center\">11.27</td>\r\n                <td align=\"center\">11.30</td>\r\n                <td align=\"center\">11.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">12.00</td>\r\n                <td align=\"center\">12.04</td>\r\n                <td align=\"center\">12.05</td>\r\n                <td align=\"center\">12.08</td>\r\n                <td align=\"center\">12.10</td>\r\n                <td align=\"center\">12.12</td>\r\n                <td align=\"center\">12.15</td>\r\n                <td align=\"center\">12.17</td>\r\n                <td align=\"center\">12.20</td>\r\n                <td align=\"center\">12.30</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">12.40</td>\r\n                <td align=\"center\">12.44</td>\r\n                <td align=\"center\">12.45</td>\r\n                <td align=\"center\">12.48</td>\r\n                <td align=\"center\">12.50</td>\r\n                <td align=\"center\">12.52</td>\r\n                <td align=\"center\">12.55</td>\r\n                <td align=\"center\">12.57</td>\r\n                <td align=\"center\">13.00</td>\r\n                <td align=\"center\">13.10</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td colspan=\"10\"><br>\r\n                  <h2>TURNO TARDE</h2></td>\r\n              </tr>\r\n              <tr>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">SALIDA </th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">LLEGADA</th>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM    Tornavía</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Sociales<br>\r\n                  M.         Asunta</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Estación    Miguelete</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Parque Yrigoyen</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM <br>\r\n                  Av. 25 de Mayo</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Saavedra y    Moreno&nbsp;</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Mitre y Tucumán</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Economia y    Negocios</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Ayacucho y Matheu</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM<br>\r\n                  Tornavía</strong></td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">16.10</td>\r\n                <td align=\"center\">16.14</td>\r\n                <td align=\"center\">16.15</td>\r\n                <td align=\"center\">16.18</td>\r\n                <td align=\"center\">16.20</td>\r\n                <td align=\"center\">16.22</td>\r\n                <td align=\"center\">16.25</td>\r\n                <td align=\"center\">16.27</td>\r\n                <td align=\"center\">16.30</td>\r\n                <td align=\"center\">16.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">17.10</td>\r\n                <td align=\"center\">17.14</td>\r\n                <td align=\"center\">17.15</td>\r\n                <td align=\"center\">17.18</td>\r\n                <td align=\"center\">17.20</td>\r\n                <td align=\"center\">17.22</td>\r\n                <td align=\"center\">17.25</td>\r\n                <td align=\"center\">17.27</td>\r\n                <td align=\"center\">17.30</td>\r\n                <td align=\"center\">17.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">18.10</td>\r\n                <td align=\"center\">18.14</td>\r\n                <td align=\"center\">18.15</td>\r\n                <td align=\"center\">18.18</td>\r\n                <td align=\"center\">18.20</td>\r\n                <td align=\"center\">18.22</td>\r\n                <td align=\"center\">18.25</td>\r\n                <td align=\"center\">18.27</td>\r\n                <td align=\"center\">18.30</td>\r\n                <td align=\"center\">18.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">19.10</td>\r\n                <td align=\"center\">19.14</td>\r\n                <td align=\"center\">19.15</td>\r\n                <td align=\"center\">19.18</td>\r\n                <td align=\"center\">19.20</td>\r\n                <td align=\"center\">19.22</td>\r\n                <td align=\"center\">19.25</td>\r\n                <td align=\"center\">19.27</td>\r\n                <td align=\"center\">19.30</td>\r\n                <td align=\"center\">19.40</td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <td colspan=\"10\"><br>\r\n                  <h2>TURNO NOCHE</h2></td>\r\n              </tr>\r\n              <tr>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">SALIDA </th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">LLEGADA</th>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM    Tornavía&nbsp;</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Sociales<br>\r\n                  M.         Asunta</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Estación    Miguelete</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Parque Yrigoyen</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM<br>\r\n                  Av. 25 de Mayo</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Saavedra y    Moreno&nbsp;</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Mitre y Tucumán</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Economia y    Negocios</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Ayacucho y Matheu</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM<br>\r\n                  Tornavía</strong></td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">20.10</td>\r\n                <td align=\"center\">20.14</td>\r\n                <td align=\"center\">20.15</td>\r\n                <td align=\"center\">20.18</td>\r\n                <td align=\"center\">20.20</td>\r\n                <td align=\"center\">20.22</td>\r\n                <td align=\"center\">20.25</td>\r\n                <td align=\"center\">20.27</td>\r\n                <td align=\"center\">20.30</td>\r\n                <td align=\"center\">20.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">20.55</td>\r\n                <td align=\"center\">20.59</td>\r\n                <td align=\"center\">21.00</td>\r\n                <td align=\"center\">21.03</td>\r\n                <td align=\"center\">21.05</td>\r\n                <td align=\"center\">21.07</td>\r\n                <td align=\"center\">21.10</td>\r\n                <td align=\"center\">21.12</td>\r\n                <td align=\"center\">21.15</td>\r\n                <td align=\"center\">21.25</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">21.30</td>\r\n                <td align=\"center\">21.34</td>\r\n                <td align=\"center\">21.35</td>\r\n                <td align=\"center\">21.38</td>\r\n                <td align=\"center\">21.40</td>\r\n                <td align=\"center\">21.42</td>\r\n                <td align=\"center\">21.45</td>\r\n                <td align=\"center\">21.47</td>\r\n                <td align=\"center\">21.50</td>\r\n                <td align=\"center\">22.00</td>\r\n              </tr>\r\n               <tr>\r\n                <td align=\"center\">22.15</td>\r\n                <td align=\"center\">22.19</td>\r\n                <td align=\"center\">22.20</td>\r\n                <td align=\"center\">22.23</td>\r\n                <td align=\"center\">22.25</td>\r\n                <td align=\"center\">22.27</td>\r\n                <td align=\"center\">22.30</td> \r\n                <td align=\"center\">22.32</td>\r\n                <td align=\"center\">22.35</td>\r\n                <td align=\"center\">22.45</td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <td colspan=\"10\" align=\"left\"><br>\r\n                  <br>\r\n                  <h1>SÁBADO</h1></td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"10\"><h1> TURNO MAÑANA</h1></td>\r\n              </tr>\r\n              <tr>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">SALIDA </th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">&nbsp;</th>\r\n                <th align=\"center\" bgcolor=\"#DFDFDF\">LLEGADA</th>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM    Tornavía</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Sociales<br>\r\n                  M.         Asunta</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Estación    Miguelete</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Parque Yrigoyen</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM<br>\r\n                  Av. \r\n                  25 de Mayo</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Saavedra y    Moreno&nbsp;</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Mitre y<br>\r\n                  Tucumán</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Economia<br>\r\n                  y    Negocios</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>Ayacucho<br>\r\n                  y Matheu</strong></td>\r\n                <td align=\"center\" valign=\"top\" bgcolor=\"#D3D3D3\"><strong>UNSAM Tornavía    </strong></td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">8.10</td>\r\n                <td align=\"center\">8.13</td>\r\n                <td align=\"center\">8.15</td>\r\n                <td align=\"center\">8.18</td>\r\n                <td align=\"center\">8.20</td>\r\n                <td align=\"center\">8.22</td>\r\n                <td align=\"center\">8.25</td>\r\n                <td align=\"center\">8.27</td>\r\n                <td align=\"center\">8.30</td>\r\n                <td align=\"center\">8.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">9.10</td>\r\n                <td align=\"center\">9.13</td>\r\n                <td align=\"center\">9.15</td>\r\n                <td align=\"center\">9.18</td>\r\n                <td align=\"center\">9.20</td>\r\n                <td align=\"center\">9.22</td>\r\n                <td align=\"center\">9.25</td>\r\n                <td align=\"center\">9.27</td>\r\n                <td align=\"center\">9.30</td>\r\n                <td align=\"center\">9.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">11.10</td>\r\n                <td align=\"center\">11.13</td>\r\n                <td align=\"center\">11.15</td>\r\n                <td align=\"center\">11.18</td>\r\n                <td align=\"center\">11.20</td>\r\n                <td align=\"center\">11.22</td>\r\n                <td align=\"center\">11.25</td>\r\n                <td align=\"center\">11.27</td>\r\n                <td align=\"center\">11.30</td>\r\n                <td align=\"center\">11.40</td>\r\n              </tr>\r\n               <tr>\r\n                <td align=\"center\">12.10</td>\r\n                <td align=\"center\">12.14</td>\r\n                <td align=\"center\">12.15</td>\r\n                <td align=\"center\">12.18</td>\r\n                <td align=\"center\">12.20</td>\r\n                <td align=\"center\">12.22</td>\r\n                <td align=\"center\">12.25</td>\r\n                <td align=\"center\">12.27</td>\r\n                <td align=\"center\">12.30</td>\r\n                <td align=\"center\">12.40</td>\r\n              </tr>\r\n              <tr>\r\n                <td align=\"center\">13.00</td>\r\n                <td align=\"center\">13.03</td>\r\n                <td align=\"center\">13.05</td>\r\n                <td align=\"center\">13.08</td>\r\n                <td align=\"center\">13.10</td>\r\n                <td align=\"center\">13.12</td>\r\n                <td align=\"center\">13.15</td>\r\n                <td align=\"center\">13.17</td>\r\n                <td align=\"center\">13.20</td>\r\n                <td align=\"center\">13.30</td>\r\n              </tr>\r\n                </tbody></table>\r\n          </div>\r\n        <div *ngIf=\"mostrarTrenHorario ==true \">\r\n          <button (click)=\"mostrarTrenHorario = false; mostrarInfoViajeros = true \"> <- Volver</button>\r\n\r\n          <div id=\"contenido\" style=\"border-left: 1px solid #2C88CD\" class=\"color_oficial\"> <!-- InstanceBeginEditable name=\"contenido\" -->\r\n          <h1><strong>MINITREN Gratis<br>\r\n          </strong></h1>   \r\n         <!--  <img src=\"/home/img/tren.jpg\" width=\"862\" height=\"436\" alt=\"foto del MiniTrén UNSAM\" class=\"img100\"> -->\r\n          <br>\r\n          <h1>Servicio del minitren UNSAM<br></h1>\r\n          <ul>\r\n          <li>Pasa de lunes a   viernes&nbsp;por   tres estaciones: \r\n            Migueletes, próxima a la del tren Mitre; Sociales y   Tornavía.</li>\r\n          <li>La   frecuencia es de&nbsp;16   veces por día,&nbsp;aproximadamente   dos veces por hora, \r\n            con&nbsp;un   receso entre las  13 y las 16. </li>\r\n          <li>La salida desde Miguelete suele   ser después de que llega la formación más próxima del tren Mitre, \r\n          por lo que su   horario es más flexible. </li></ul>\r\n\r\n          <p>&nbsp;</p>\r\n\r\n          <strong>HORARIOS</strong>\r\n\r\n              <table cellpadding=\"5\" cellspacing=\"2\">\r\n                      <colgroup><col width=\"80\" span=\"2\">\r\n                      </colgroup><tbody><tr>\r\n                        <td bgcolor=\"#DFDFDF\">Tornavías</td>\r\n                        <td bgcolor=\"#DFDFDF\">Miguelete</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">7:40</td>\r\n                        <td bgcolor=\"#eeeeee\">7:50 *</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">8:10</td>\r\n                        <td bgcolor=\"#eeeeee\">8:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">8:40</td>\r\n                        <td bgcolor=\"#eeeeee\">8:50 *</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">9:10</td>\r\n                        <td bgcolor=\"#eeeeee\">9:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">9:40</td>\r\n                        <td bgcolor=\"#eeeeee\">9:50 *</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\" colspan=\"2\">&nbsp;</td>\r\n                        \r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">11:40</td>\r\n                        <td bgcolor=\"#eeeeee\">11:50</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">12:10</td>\r\n                        <td bgcolor=\"#eeeeee\">12:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">12:40</td>\r\n                        <td bgcolor=\"#eeeeee\">12:50</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">13:05</td>\r\n                        <td bgcolor=\"#eeeeee\">13:15</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\" height=\"25\"><img src=\"/home/img/barraHorarios.jpg\" width=\"35\" height=\"5\"></td>\r\n                        <td bgcolor=\"#eeeeee\" height=\"25\"><img src=\"/home/img/barraHorarios.jpg\" width=\"35\" height=\"5\"></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\" colspan=\"2\">&nbsp;</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">16:50</td>\r\n                        <td bgcolor=\"#eeeeee\">17:00 *</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">17:10</td>\r\n                        <td bgcolor=\"#eeeeee\">17:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">17:50</td>\r\n                        <td bgcolor=\"#eeeeee\">18:00 *</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">18:50</td>\r\n                        <td bgcolor=\"#eeeeee\">19:00 *</td>\r\n                      </tr>\r\n                      \r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\" colspan=\"2\">&nbsp;</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">20:10</td>\r\n                        <td bgcolor=\"#eeeeee\">20:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">20:40</td>\r\n                        <td bgcolor=\"#eeeeee\">20:50</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">21:10</td>\r\n                        <td bgcolor=\"#eeeeee\">21:20</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td bgcolor=\"#eeeeee\">21:40</td>\r\n                        <td bgcolor=\"#eeeeee\">21:50</td>\r\n                      </tr>\r\n                       <tr>\r\n                        <td bgcolor=\"#eeeeee\" colspan=\"2\" align=\"center\"><strong>Fin De Recorrido</strong></td>\r\n                      </tr>\r\n          </tbody></table>\r\n          <blockquote>\r\n            <p>* Espera a que llegue el 1er tren del Ferrocarril Mitre</p>\r\n            <p>El Conductor cuenta con un libro de sugerencias, en caso de utilizarlo se ruega indicar un mail de contacto.</p>\r\n          </blockquote>\r\n        </div>\r\n\r\n</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/info-viajeros/info-viajeros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoViajerosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoViajerosComponent = (function () {
    function InfoViajerosComponent() {
        this.mostrarInfoViajeros = true;
        this.mostrarColectivoHorario = false;
        this.mostrarTrenHorario = false;
    }
    InfoViajerosComponent.prototype.ngOnInit = function () { };
    return InfoViajerosComponent;
}());
InfoViajerosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-viajeros',
        template: __webpack_require__("./src/app/info-viajeros/info-viajeros.component.html"),
        styles: [__webpack_require__("./src/app/info-viajeros/info-viajeros.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoViajerosComponent);

//# sourceMappingURL=info-viajeros.component.js.map

/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = "#menuPrincipal {\r\n    \r\n}\r\n\r\n#menuPrincipal a {\r\n    color: #212121;\r\n}\r\n\r\ndiv, p {\r\n    font-family: 'Lato', sans-serif;\r\n    text-align: center;\r\n    text-transform: none;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.roundButton {\r\n    width: 20vw;\r\n    height: 20vw;\r\n    font-size: 12vw;\r\n\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    /* align-content: center; */\r\n    margin: 0px auto;\r\n    padding: 2px;\r\n    display: block;\r\n    outline-style: none;\r\n    margin-top: 12%;\r\n}\r\n\r\n.roundButton i {\r\n    color: rgb(225, 171, 15);\r\n    padding: 12%;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    height: auto;\r\n}\r\n\r\n/*@media (min-width: 576px) {\r\n    .roundButton {\r\n        width: 50px;\r\n        height: 50px;\r\n        font-size: 38px;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .roundButton {\r\n        width: 52px;\r\n        height: 52px;\r\n        font-size: 42px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .roundButton {\r\n        width: 54px;\r\n        height: 54px;\r\n        font-size: 42px;\r\n    }\r\n}*/\r\n\r\n.buttonText {\r\n    font-size: 14px;\r\n    font-weight: bolder;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .buttonText {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .buttonText {\r\n        font-size: 18px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menuPrincipal\">\r\n    <div id=\"deviceready\" class=\"blink\">\r\n    </div>\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"col-xs-4 text-center buttonText\">\r\n      <a routerLink=\"/infoGeneral\">\r\n        <div class=\"roundButton\">\r\n          <div><i class=\"fas fa-university\"></i></div>\r\n        </div>\r\n        <p>Información general<br>sobre el Congreso</p>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-xs-4 text-center buttonText\">\r\n      <a routerLink=\"/programa\">\r\n        <div class=\"roundButton\">\r\n          <div><i class=\"far fa-calendar-alt\"></i></div>\r\n        </div>\r\n        <p>Programa<br>del Congreso</p>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-xs-4 text-center buttonText\">\r\n      <a routerLink=\"/actividadesCulturales\">\r\n        <div class=\"roundButton\">\r\n          <div><i class=\"fas fa-file-alt\"></i></div>\r\n        </div>\r\n        <p>Programa de<br>actividades culturales</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"col-xs-4 text-center buttonText\">\r\n      <a routerLink=\"/infoViajeros\">\r\n        <div class=\"roundButton\">\r\n          <div><i class=\"fas fa-info\"></i></div>\r\n        </div>\r\n        <p>Cómo llegar</p>\r\n      </a>\r\n    </div>\r\n    \r\n      <div class=\"col-xs-4 text-center buttonText\">\r\n        <a routerLink=\"/alojamientoYComidas\">\r\n          <div class=\"roundButton\">\r\n            <div><i class=\"fas fa-bed\"></i></div>\r\n          </div>\r\n          <p>Alojamiento<br>y comidas</p>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col-xs-4 text-center buttonText\">\r\n        <a routerLink=\"/agenda\">\r\n          <div class=\"roundButton\">\r\n            <div><i class=\"fas fa-book\"></i></div>\r\n          </div>\r\n          <p>Mi agenda</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a (click)=\"irACreditos()\">Creditos</a>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_cordova__ = __webpack_require__("./node_modules/angular-cordova/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_cordova_plugin_firebase__ = __webpack_require__("./node_modules/angular-cordova/plugin/firebase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_agenda_agenda_service__ = __webpack_require__("./src/app/services/agenda/agenda.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioComponent = (function () {
    function InicioComponent(firebaseService, agendaService) {
        this.firebaseService = firebaseService;
        this.agendaService = agendaService;
    }
    InicioComponent.prototype.ngOnInit = function () {
        var self = this;
        // var intv = 10;
        // var intevaloSeg = 1000; //1 segundo
        // var intervaloMin = 1000 * 60;
        // Get Token y guarda en agenda.service
        self.getTokenFCM();
        // Get de charlas agendadas por un token (el token está en el agenda.service)
        this.agendaService.getCharlasAgendadas();
        // self.intervalo = setInterval(() => {
        //   console.log("llegue al intervalo!!!");
        //   self.agendaService.recordarCharlasComienzan();
        // }, intv * intevaloSeg);
    };
    InicioComponent.prototype.getTokenFCM = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_angular_cordova__["a" /* Cordova */].deviceready.subscribe(function () {
            console.log("Is ready for firebase");
            var FCMPlugin = window.FirebasePlugin;
            FCMPlugin.getToken(function (token) {
                if (token !== null && token !== '') {
                    console.log('ANGULAR Firebase Token: ' + token);
                    self.agendaService.setToken(token);
                    clearInterval(self.interval);
                }
            }, function (e) {
                console.error(JSON.stringify(e));
            });
        });
    };
    InicioComponent.prototype.irACreditos = function () {
        document.getElementById('body2').style.display = 'block';
        document.getElementById('body1').style.display = 'none';
    };
    return InicioComponent;
}());
InicioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-inicio',
        template: __webpack_require__("./src/app/inicio/inicio.component.html"),
        styles: [__webpack_require__("./src/app/inicio/inicio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_cordova_plugin_firebase__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_cordova_plugin_firebase__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_agenda_agenda_service__["a" /* AgendaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_agenda_agenda_service__["a" /* AgendaService */]) === "function" && _b || Object])
], InicioComponent);

var _a, _b;
//# sourceMappingURL=inicio.component.js.map

/***/ }),

/***/ "./src/app/programa/programa.component.css":
/***/ (function(module, exports) {

module.exports = ".headPantalla {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #E2AC0F;\r\n    padding: 0.5em;\r\n    -webkit-box-shadow: inset 0px -5px 5px black;\r\n    box-shadow: inset 0px -2px 5px black;\r\n    margin-bottom: -1px;\r\n    font-family: 'Lato', sans-serif;\r\n    font-size: 18px;\r\n  }\r\n\r\n.favoritos{\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.horario{\r\n  text-align: center;\r\n  height: 100%;\r\n  position: absolute;\r\n  right: -2%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.listadoTemas\r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n.listadoTemas h2\r\n{\r\n    font-size: 1.5em;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .listadoTemas h2 {\r\n        font-size: 1.3em;\r\n    }\r\n}\r\n\r\n.listadoTemas li.tema\r\n{\r\n    border-bottom: 2px solid #E8E8E8;\r\n}\r\n\r\n.listadoTemas ul\r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\ninput, select {\r\n    width:100%;\r\n}\r\n\r\n#buscador{\r\n    padding: 5px\r\n}\r\n\r\nbody { margin: 30px; }\r\n\r\n.search {\r\n  position: relative;\r\n  color: #aaa;\r\n  font-size: 16px;\r\n}\r\n\r\n.search input {\r\n  width:100%;\r\n\r\n  /* background: #fcfcfc;\r\n  border: 1px solid #aaa; */\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;\r\n          box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;\r\n}\r\n\r\n.search input { text-indent: 32px;}\r\n\r\n.search .fa-search { \r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/programa/programa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pantallaBlanca\">\r\n  <div class=\"headPantalla col-xs-12\">\r\n    <div style=\"text-align: center;\">Programa del Congreso</div>\r\n    <div class=\"search\">\r\n        <!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i> -->\r\n        <span class=\"fa fa-search\"></span>\r\n        <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Buscar..\" id=\"buscador\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tabs-agenda\" *ngIf=\"!charlaSeleccionada\">\r\n    <ngb-tabset (tabChange)=\"searchText =null\">\r\n      <ngb-tab *ngFor=\"let tab of tabs\" title=\"{{tab.title}}\"  >\r\n        <ng-template ngbTabContent>\r\n          <ul class=\"listadoTemas\">\r\n            <li *ngFor=\"let tema of tab.tema\" class=\"tema\">\r\n              <div *ngIf=\"tieneCharlas(tema.charlas | filter:searchText)\">\r\n                <div style=\"right: -15px\">\r\n                  <h2>{{tema.nombreTema}}</h2>\r\n                </div>\r\n                <ul>\r\n                  <li *ngFor=\"let charla of tema.charlas | filter:searchText\" class=\"item tema row favoritos\">\r\n                    <div class=\"col-xs-8\" style=\"right: -15px\" (click)=\"charlaSeleccionada = charla; oradorSelecionado = charla.oradores\">{{charla.tituloCharla}} - {{charla.nombreOrador}} </div>\r\n                    <div>\r\n                      <ul *ngFor=\"let orador of charla.oradores\">\r\n                        <li>\r\n                          <!-- {{charla.tituloCharla}} -  -->- {{orador.nombreOrador}}</li>\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"horario col-xs-4\" (click)=\"toggleAgendar(charla)\">\r\n                      <span>{{charla.horaCharla | date:'H:mm'}}hs-{{charla.horaFinCharla | date:'H:mm'}}hs</span>\r\n                      <span>\r\n                        <i [ngClass]=\"iconoFavorito(charla) ? 'fas fa-star' : 'far fa-star'\" style=\"color: #E2AC0F;\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </ng-template>\r\n\r\n      </ngb-tab>\r\n\r\n\r\n    </ngb-tabset>\r\n  </div>\r\n</div>\r\n<!-- Charla seleccionada -->\r\n<div *ngIf=\"charlaSeleccionada\">\r\n  <button (click)=\"charlaSeleccionada = null\">\r\n    <- Volver</button>\r\n      <h2>{{charlaSeleccionada.tituloCharla}}</h2>\r\n      <ul *ngFor=\"let orador of oradorSelecionado\">\r\n        <li>{{orador.nombreOrador}}</li>\r\n      </ul>\r\n      <span>{{charlaSeleccionada.horaCharla | date:'H:mm'}} - {{charlaSeleccionada.horaFinCharla | date:'H:mm'}} hs</span>\r\n      <p>{{charlaSeleccionada.resumenCharla}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/programa/programa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__ = __webpack_require__("./src/app/apiservice/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__ = __webpack_require__("./src/app/services/agenda/agenda.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* API */


var ProgramaComponent = (function () {
    function ProgramaComponent(apiService, agendaService) {
        this.apiService = apiService;
        this.agendaService = agendaService;
        this.tabs = [];
        this.tabs[0] = { 'title': "Día 1", 'content': "DÍA 1", 'tema': this.temas1 };
        this.tabs[1] = { 'title': "Día 2", 'content': "DÍA 2", 'tema': this.temas2 };
        this.tabs[2] = { 'title': "Día 3", 'content': "DÍA 3", 'tema': this.temas3 };
        this.tabs[3] = { 'title': "Día 4", 'content': "DÍA 4", 'tema': this.temas4 };
    }
    ProgramaComponent.prototype.ngOnInit = function () {
        this.traerTemaDia(1, 0);
        this.traerTemaDia(2, 1);
        this.traerTemaDia(3, 2);
        this.traerTemaDia(4, 3);
    };
    ProgramaComponent.prototype.traerTemaDia = function (dia, tab) {
        var _this = this;
        this.apiService.getTemas(dia).subscribe(function (res) {
            _this.tabs[tab].tema = res;
        });
    };
    ProgramaComponent.prototype.verCharla = function (charla) {
        this.charlaSeleccionada = charla;
    };
    /*
    tieneCharlas(todasCharlasFiltradas) espera un array con todas las charlas YA FILTRADAS POR EL FILTER.PIPE
    Cuenta cuantas hay y luego en la vista pregunta si es true o false y lo muestra o no.
    */
    ProgramaComponent.prototype.tieneCharlas = function (todasCharlasFiltradas) {
        return todasCharlasFiltradas.length > 0;
    };
    ProgramaComponent.prototype.iconoFavorito = function (charla) {
        var predicate = this.agendaService.chAgendadas.find(function (c) { return c.id === charla.id; });
        return predicate != null;
    };
    ProgramaComponent.prototype.toggleAgendar = function (idCharla) {
        console.log("toggleAgendar");
        this.agendaService.agendarCharla(idCharla);
    };
    return ProgramaComponent;
}());
ProgramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-programa',
        template: __webpack_require__("./src/app/programa/programa.component.html"),
        styles: [__webpack_require__("./src/app/programa/programa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__apiservice_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_agenda_agenda_service__["a" /* AgendaService */]) === "function" && _b || Object])
], ProgramaComponent);

var _a, _b;
//# sourceMappingURL=programa.component.js.map

/***/ }),

/***/ "./src/app/services/agenda/agenda.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiservice_api_service__ = __webpack_require__("./src/app/apiservice/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_DateDiff__ = __webpack_require__("./src/app/agenda/DateDiff.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_cordova__ = __webpack_require__("./node_modules/angular-cordova/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgendaService = (function () {
    function AgendaService(apiService) {
        this.apiService = apiService;
        this.token = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.token$ = this.token.asObservable();
        this.charlasAgendadas = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.charlasAgendadas$ = this.charlasAgendadas.asObservable();
        var self = this;
        var intv = 10;
        var intevaloSeg = 1000; //1 segundo
        var intervaloMin = 1000 * 60;
        console.log("aca?");
        self.interval = setInterval(function () {
            console.log("interval");
            self.recordarCharlasComienzan();
        }, intv * intevaloSeg);
    }
    AgendaService.prototype.ngOnInit = function () {
        var self = this;
        self.token$.subscribe(function (token) {
            self.getCharlasAgendadas();
        });
    };
    AgendaService.prototype.setToken = function (_token) {
        this.token.next(_token);
    };
    AgendaService.prototype.getCharlasAgendadas = function () {
        var _this = this;
        var self = this;
        return this.token$
            .subscribe(function (token) {
            self.theToken = token;
            console.log(token);
            self.apiService
                .get("charlas/usuario/" + token, "")
                .subscribe(function (data) {
                self._charlasAgendadas = data;
                self.chAgendadas = data;
                console.log(data);
                _this.charlasAgendadas.next(data);
            });
        });
    };
    AgendaService.prototype.recordarCharlasComienzan = function () {
        var self = this;
        console.log(this._charlasAgendadas);
        this._charlasAgendadas.forEach(function (element) {
            var titulo = element.tituloCharla;
            var time = element.horaCharla;
            var dateNow = new Date();
            var recordatorioTime = new Date(time);
            var minutosFaltantes = 0;
            // this.getdate = recordatorioTime.getDate();
            console.log(time);
            console.log(new Date(time));
            //Si corresponde para el mismo día...
            //console.log("dateNow.getDate(): " + dateNow.getDate() +"; recordatorioTime.getDate(): "+recordatorioTime.getDate());
            //var dia = dateNow.getDate();
            var dia = recordatorioTime.getDate(); //Temporal para hacer que pase.
            if (dia == recordatorioTime.getDate()) {
                var tiempoFaltante = new __WEBPACK_IMPORTED_MODULE_3__agenda_DateDiff__["a" /* DateDiff */](recordatorioTime, dateNow);
                console.log("tiempo faltante" + tiempoFaltante);
                minutosFaltantes = tiempoFaltante.minutes;
                var horasRestantes = tiempoFaltante.hours;
                console.log(horasRestantes);
            }
            console.log("minutos faltante" + minutosFaltantes);
            if (minutosFaltantes == 10 && horasRestantes == 0) {
                __WEBPACK_IMPORTED_MODULE_4_angular_cordova__["a" /* Cordova */].deviceready.subscribe(function () {
                    console.log('llegamos a los 10 min faltantes!');
                    cordova.plugins.notification.local.schedule({
                        title: "Nuevo Mensaje",
                        text: "Dentro de 10 minutos comenzará: " + titulo,
                    });
                });
            }
        });
    };
    AgendaService.prototype.agendarCharla = function (charla) {
        var self = this;
        console.log("agendarCharla");
        return self.agregarOQuitarFavoritos(self.theToken, charla, "charla");
    };
    AgendaService.prototype.agregarOQuitarFavoritos = function (token, elemento, tipo) {
        var _this = this;
        var self = this;
        console.log("agregarOQuitarFavoritos");
        this.apiService.get("usuario/" + token + "/" + tipo + "/" + elemento.id, "").subscribe(function (data) {
            var charlas = _this._charlasAgendadas;
            if (data == 'Agendado!') {
                charlas.push(elemento);
            }
            else if (data == 'Quitado de la agenda.') {
                var index = charlas.findIndex(function (c) { return c.id == elemento.id; });
                charlas.splice(index, 1);
            }
            self.charlasAgendadas.next(charlas);
            console.log(data);
        });
    };
    AgendaService.prototype.agendarActividad = function (actividad) {
        var self = this;
        console.log("agendarActividad");
        return self.agregarOQuitarFavoritos(self.theToken, actividad, "actividad");
    };
    return AgendaService;
}());
AgendaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__apiservice_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apiservice_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AgendaService);

var _a;
//# sourceMappingURL=agenda.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    urlBase: 'http://grupoargentinoinformatico.com/server-xvi-sael-celes/api/v1'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map