import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { filter } from 'rxjs/operator/filter';
import { catchOffline } from '@ngx-pwa/offline';

@Component({
  selector: 'app-home',
  template: `
  <h2> tabla de datos de la NASA</h2>
 <div   class="col-12 botonera">
 <span> <button   class="btn btn-danger" (click)="activos()" >  Activos </button></span>
 <span> <button   class="btn btn-danger" (click)="desactivos()">  desactivados </button></span>
 <span   *ngIf="statusClick===1"> <button   class="btn btn-danger" (click)="todos()">  todos </button></span>
</div>
 <ngx-datatable
 #table
 class='material'
 [columns]="columns"
 [columnMode]="'force'"
 [headerHeight]="50"
 [footerHeight]="50"
 [rowHeight]="'auto'"
 [limit]="10"
 [rows]='data$ | async'>
</ngx-datatable>
 
 `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any;
  
    temp = [];
  
    columns = [
      { prop: 'city' },
      { name: 'contact' },
      { prop: 'location_zip' },
      { prop: 'status' }
    ];

 statusClick = 0;
  constructor(  public serve: DataService){

 
   }

   data$ = this.serve.getDS();
   /* data$ = this.serve.getDS();

    //data$ = this.serve.getDS().pipe( filter( (x) =>  x.status === 'Active' ) );*/
  ngOnInit() {
 
  }



  updateFilter(event) {

    const val = event.target.value.toLowerCase();

   
   const temp = this.serve.getDS().pipe(map(item => item.filter(sta => sta.status === 'Active')));

 console.log(temp);

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  activos(){
      const temp = this.serve.getDS().pipe(map(item => item.filter(sta => sta.status === 'Active')));
       this.data$ = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        this.statusClick = 1 ;

  }


  desactivos(){
    const temp = this.serve.getDS().pipe(map(item => item.filter(sta => sta.status === 'Inactive')));
     this.data$ = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
      this.statusClick = 1 ;

}

todos(){
  const temp = this.serve.getDS();
   this.data$ = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
    this.statusClick = 0 ;

}

}
