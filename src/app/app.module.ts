import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { Routing } from './app.routes';
import { AppRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

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
  providers: [Keyobject],
  bootstrap: [AppComponent]
})
export class AppModule { }
