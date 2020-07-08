import { ProjectService } from './project.service';
import { DashboardService } from './dashboard.service';
import { AdminModule } from './admin/admin-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
    // HttpClient
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DashboardService,
    ProjectService]
})
export class AppModule { }
