

# XVI SAEL - CELES 2018 
## Angular 4 + Cordova boilerplate


Este proyecto usa Angular 4 + Cordova boilerplate configurado para trabajar en conjunto. ¡Podés comenzar a 'buildeando' la fantástica aplicación híbrida hecha en Cordova con Angular 4!

Requisitos:

 - Tener instalado JAVA Y JAVA SDK (para poder construir el proyecto Cordova)
- Tener instalado globalmente angular-cli (para crear componentes, servicios, etc con comandos e iniciar el *serve*)

       `npm install -g @angular/cli`

- Tener angular 4 y cordova instalados (vienen con este proyecto)

Para más información ver siguiente enlace:
Clonado de NgCordova: https://github.com/ionic-team/ng-cordova

## Primeros pasos
Como toda aplicación hecha con npm packages, primero antes que nada hay que hacer en la consola: 

    cd [rutaCarpetaDelProyecto]/aplicacion
    npm install
    ng serve -o
    
Estos 3 comandos se **posicionan en la carpeta raíz** del proyecto clonado.
Luego **instala todas las dependencias/packages** de package.json.
Y por último, **inicia el servidor de Angular 4.**

En el explorador, como estamos desarrollando una aplicación celular, si estás usando Chrome, **apretar F12** en el teclado y apretar en **Toggle device monitor**, para ver la vista como un celular en el escritorio.


# Crear pantalla nueva
Cada pantalla la vamos a definir como un componente nuevo.

**Crear componente**

    ng generate component <nombreDeLaPantalla>
   
   Esto generará las archivos necesarios y agregará la línea de *import* a ng.module.ts.
## Ejemplo: Crear la pantalla agenda
   Crear el componente de la Agenda.
  `ng generate component agenda`  

La estructura de las carpetas quedará así:
> aplicacion
>> src
> >> app
>>>> inicio
>>>> agenda
>>>>> agenda.component.css <--- Estilos del componente
      agenda.component.html <--- Vista del componente
      agenda.component.spec.ts <--- Test del componente
      agenda.component.ts <--- Controlador del componente
>.
>.
>.

> package.json
> .
> .
> .
> README.md
> tslint.json
> 
### Agregarle URL al componente (Router)
Si queremos acceder a http://localhost:4200/agenda seguramente no muestre nada o devuelva error o nos redireccione a http://localhost:4200. Es decir, no nos va a mostrar la vista de la Agenda.
#### Editar app.module.ts
Para ello, vamos a requerir escribir algunas líneas en app.module.ts.

Dentro del array `appRoutes` vamos a agregar una línea nueva:

    const appRoutes: Routes = [
      { path: '', component: InicioComponent },
      { path: 'programa', component: ProgramaComponent },
      { path: 'agenda', component: AgendaComponent }, // <--- Agregar esta línea
    ];

Si no está importada la clase, hacerlo ahora, justo arriba del array `appRoutes`

    import { AgendaComponent } from './agenda/agenda.component';

#### Agregar link a Agenda desde inicio.component
Editar el archivo [raizProyecto]/aplicacion/src/app/inicio/inicio.component.html
Buscar en la línea 39:

    <a href="#pagetwo">
Y cambiar por 

    <a routerLink="/agenda">

Guardar y ver en el navegador.


Manual de Angular 4+: https://angular.io/guide/quickstart
Tutorial de compartir variables con un servicio (SUPER FÁCIL Y ENTENDIBLE!): https://blogs.msmvps.com/deborahk/build-a-simple-angular-service-to-share-data/


# API REST

Get All Charlas (con orador y tema)
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/charla.json

Get Charla by id (con orador y tema)
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/charla/{id}.json


Get All Oradores
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/orador.json

Get Orador by id
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/orador/{id}.json


Get All Temas
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/tema.json

Get Tema by id
http://grupoargentinoinformatico.com/xvi-sael-celes/api.php/tema/{id}.json