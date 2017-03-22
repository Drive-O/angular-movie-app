import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

//Barrel
import { MainComponent, FieldComponent, FieldItemComponent } from './main';

//providers
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FieldComponent,
    FieldItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
