import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor( public http: HttpClient ) { }

  urldata = '../../assets/mocks/situation.json';

  getDS(): Observable <any> {

  return this.http.get(this.urldata);

  }

}


