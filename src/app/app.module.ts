import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OfflineModule } from '@ngx-pwa/offline';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule ,
    HttpClientModule,
    OfflineModule,
    NgbModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
