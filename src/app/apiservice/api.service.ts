import { ProgramaComponent } from '../programa/programa.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) { }

	getTemas(dia) {
		return this.http.get(environment.urlBase + "/temas?dia="+dia);
	}

	get(recurso, params) {
		params = params != "" ? "?"+params : "";
		return this.http.get(environment.urlBase + "/" + recurso + "" + params);
		// .map(r => r.json());
		// this.results = JSON.stringify(this.temas);
		// return this.results;
  }

}