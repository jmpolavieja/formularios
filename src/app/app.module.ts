import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario1Component } from './formulario1/formulario1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { FichaUserComponent } from './ficha-user/ficha-user.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    Formulario2Component,
    Formulario3Component,
    FichaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
