import { CommercialManagementComponent } from './commercial-management/commercial-management.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: CommercialManagementComponent },
  { path: 'situacion', component: HomeComponent},
  { path: 'gestion', component: CommercialManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
