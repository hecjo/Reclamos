import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReclamoComponent } from './pages/reclamo/reclamo.component';
import { LoginReclamoComponent } from './pages/login-reclamo/login-reclamo.component';
import { AdminReclamoComponent } from './pages/admin-reclamo/admin-reclamo.component';
import { RegistroReclamoComponent } from './pages/registro-reclamo/registro-reclamo.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ReclamoComponent,
    LoginReclamoComponent,
    AdminReclamoComponent,
    RegistroReclamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
