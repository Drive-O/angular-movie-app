import { Component, Injectable } from '@angular/core';
import { MovieService } from '../../movie.service';
import { IMovieData } from '../../IMovieData';

@Component({
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})

export class FieldComponent{

  movies: IMovieData[];
  //Dependency Injection
  constructor(private _movieService: MovieService){
    _movieService
  }
  ngOnInit(): void{
    this.movies = this._movieService.getMovie();
  }
}
