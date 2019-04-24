import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Charla } from './class/charla';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(charlas: Charla[], searchText: string): any[] {
     if (!charlas) return [];
     if (!searchText) return charlas;
      return charlas.filter( it => {
        return estaEnCharla(it, searchText);

    });
   }
}

function estaEnCharla(it, searchText) {
  return matches(it.tituloCharla, searchText)
      || matches(it.tema, searchText)
      || it.oradores.some(orador => matches(orador.nombreOrador, searchText)) ;

   }

function matches(text, searchText) {
  return text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
}