import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor( public http: HttpClient ) { }

  urldata = 'https://data.nasa.gov/resource/9g7e-7hzz.json';

  getDS(): Observable <any>{

  return this.http.get(this.urldata);

  }

}
