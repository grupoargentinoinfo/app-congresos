# NgCordova: Angular 4 + Cordova boilerplate

This project is using Angular 4 + Cordova boilerplate configurated to work together so you can start building your great Hybrid Cordova Mobile Apps in Angular 4.

## Installation

* Install Node.js from: https://nodejs.org/en/download/
* Install Cordova using: `npm install -g cordova`
* Clone ngCordova repository: `git clone https://github.com/NavCore/ngCordova.git`
* Go to ngCordova repository: `cd ngCordova`
* Install dependencies: `npm install`

## Development server

* Development project folder is `src/`. You should start building your Angular 4 app there!
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular project base URL

* For Android App to work, change base url in index.html to: `<base href="file:///android_asset/www/">` or simple: `<base href=".">`
* For iOS App to work, change base url in index.html to: `<base href="./">` or `<base href=".">`
* Then build the Angular project

## Build Angular project

* Run `ng build` to build the Angular project. 
* The build artifacts will be stored in the `www/` directory. 
* Use the `-prod` flag for a production build.
* ng build --prod --env=prod

## Adding Cordova platform

* Go to ngCordova repository: `cd ngCordova`
* List available Cordova platforms: `cordova platform ls`
* Add a desired platform: `cordova platform add [ browser | android | .. ]`

## Adding pluggins

* Add library allows you to access Cordova and Cordova Plugins using Angular and Typescript: `npm i angular-cordova`
* Add cordova notification plugin: `cordova plugin add cordova-plugin-local-notification`

## Run Cordova app

* After adding Cordova platform, we can run our app in desired platform: `cordova run [ browser | android | .. ]`
* There is a known problem with emulating Android app using: `cordova emulate android`, so use `cordova run android`

## Build Cordova project

* Run `cordova build [ browser | android | .. ]` to build the Cordova project.
* For example android build .apk is located in: `platforms/android/build/outputs/apk/`



https://github.com/arnesson/cordova-plugin-firebase

https://console.firebase.google.com/u/0/project/celes-2018/settings/general/android:com.grupoargentinoinformatico.xvisael

https://firebase.google.com/docs/cloud-messaging/js/client

Compilar el angular
1) ng build --prod --env=prod

Compilar en Android
Desarrollo:
cordova build android --debug

Test:
Correr en USB (habilitar USB DEBUG EN EL CELULAR ANDROID)
cordova run android --device

Producción:
cordova build android



Log de android conectado por USB:
adb logcat | findstr com.grupoargentinoinformatico.xvisael



Error de aceptar licencias en otra versión de android:
En [carpeta-root]/platforms/android/project.properties y [carpeta-root] /platforms/android/CordovaLib/project.properties
Cambiar donde dice target=android-26 a la versión que tengas instalada. En mi caso es target=android-24.






3
down vote
I am still trying to find a better way, but so far I am able to debug my Ionic app (a signed --release build) running on a real device via the Chrome (desktop) console, by specifying:

<application android:debuggable="true">

directly in the AndroidManifest.xml file. The attribute in not overwritten when I build the project with the Ionic CLI.

What I would prefer is to set the attribute from the config.xml file, so I don't have to add it again manually in AndroidManifest.xml when I remove/add the platform.