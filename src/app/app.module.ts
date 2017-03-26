import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

//Barrel
import { MainComponent, PopComponent, NowComponent } from './main';

//providers
import { MoviesService } from './services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PopComponent,
    NowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'popular', component: PopComponent},
      {path: 'right_now', component: NowComponent},
      {path: '', redirectTo: 'popular', pathMatch: 'full'},
      {path: '**', redirectTo: 'popular', pathMatch: 'full'}
    ])
  ],
  providers: [ MoviesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
