import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouting } from './app.routes';
import { AuthGuards } from './guards/guards';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

import { KickstarterService } from './services/kickstarter.service';
import { HardwareClubService } from './services/hardwareclub.service';
import { IndiegogoService } from './services/indiegogo.service';
import { StorageService } from './services/storage.service';

import { Keyobject } from './pipes/custom';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Keyobject
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    Keyobject,
    AuthGuards,
    KickstarterService,
    StorageService,
    HardwareClubService,
    IndiegogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
