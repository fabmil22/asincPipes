import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OfflineModule } from '@ngx-pwa/offline';
import { AppRoutingModule } from './app-routing.module';
import { CommercialManagementComponent } from './commercial-management/commercial-management.component';
import { ComercialManagamentService } from './services/comercial-managament.service';
import { SidebarComponent } from './share/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommercialManagementComponent,
    SidebarComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule ,
    HttpClientModule,
    OfflineModule,
    NgbModule,
    AppRoutingModule

  ],
  providers: [DataService , ComercialManagamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
