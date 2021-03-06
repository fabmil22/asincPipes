import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { filter } from 'rxjs/operator/filter';
import { catchOffline } from '@ngx-pwa/offline';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any;
  
    temp = [];
    selected  = [];
    columns = [
      { name : 'metrica', width: 160, titular: 'Metrica'} ,
      { name: 'calculo', width: 100, titular: 'Calculo' },
      { name : 'ultiP', width: 108, titular: 'Ultimo Periodo<br> Importado'  },
      { name: 'cumplimientoPeriodo', width: 110, titular: '% Cumplimiento <br> Periodo' },
      { name: 'stockCumplemientoPeriodo', width: 110, titular: 'Stock Cumplemiento <br> Periodo' },
      { name: 'stockTotalPeriodo', width: 110, titular: 'Stock Total<br> Periodo' },
      { name: 'estado', width: 110, titular: 'Estado' },
      { link: '', width: 100, titular: '' }] ;
    titular = 'Situación Actual de Indicadores';


 statusClick = 0;
  constructor(  public serve: DataService){

 
   }

   data$ = this.serve.getDS();
   /* data$ = this.serve.getDS();

    //data$ = this.serve.getDS().pipe( filter( (x) =>  x.status === 'Active' ) );*/
  ngOnInit() {
 
  }

/**  updateFilterContact(event)
 * esta funcion filtra por contactos
 * @param event 
 */

  updateFilterContact(event) {
    this.selected  = [];
    const val = event;
    const temp = this.serve.getDS().pipe(map(item => item.filter(sta2  => sta2.contact.toLowerCase().indexOf(val) !== -1 || !val)));
    // update the rows
    this.data$ = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

/**  updateFilterCitys(event)
 * esta funcion filtra por ciudades
 * @param event 
 */


  updateFilterCitys(event) {
        this.selected  = [];
        const val = event;
        const temp = this.serve.getDS().pipe(map(item => item.filter(sta2  => sta2.city.toLowerCase().indexOf(val) !== -1 || !val)));
        // update the rows
        this.data$ = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }

/**  updateFilterPostal(event)
 * esta funcion filtra por codigo postals
 * @param event 
 */

  updateFilterPostal(event) {
           this.selected  = [];
            const val = event;
            const temp = this.serve.getDS().pipe(map(item => item.filter(sta2  => sta2.location_zip.indexOf(val) !== -1 || !val)));
            // update the rows
            this.data$ = temp;
            // Whenever the filter changes, always go back to the first page
            this.table.offset = 0;
          }

/**  activos()
 * esta funcion filtra por  status activos
 * 
 */
      

  activos(){  
      this.selected  = [];
      const temp = this.serve.getDS().pipe(map(item => item.filter(sta => sta.status === 'Active')));
      this.data$ = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        this.statusClick = 1 ;

  }

/**  activos()
 * esta funcion filtra por  status desactivos
 * 
 */
  desactivos(){
    this.selected  = [];
    const temp = this.serve.getDS().pipe(map(item => item.filter(sta => sta.status === 'Inactive')));
     this.data$ = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
      this.statusClick = 1 ;

}

/**  todos()
 * muestra todos
 *
 */

  todos(){
    const temp = this.serve.getDS();
    this.data$ = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
      this.statusClick = 0 ;

  }
/*
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }*/

  displayCheck(row) {
    return row.name !== 'Robert Bruce';
  }
  
  redideccion(value){
    switch(value) {
      case 'gestion':
          console.log('gestion');
          break;
      case 'depuracion':
          console.log('depuracio');
          break;
      case 'Expediente':
          console.log('Expediente');
          break;
     case 'gestionS':
          console.log('gestionS');
          break;
    case 'Sanamiento':
          console.log('Sanamiento');
          break;
    case 'Seguimiento':
          console.log('Seguimiento');
          break;
      default:
         break;
  }

  }
  

}
