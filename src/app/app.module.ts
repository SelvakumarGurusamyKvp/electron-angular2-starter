import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { Keyobject } from './pipes/custom';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Keyobject
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Keyobject],
  bootstrap: [AppComponent]
})
export class AppModule { }
