import { Component, Injectable } from '@angular/core';
import { MovieService } from '../../movie.service';
import { IMovieData } from '../../IMovieData';

@Component({
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})

export class FieldComponent{

  movies: IMovieData[] = [];
  total_p: number;
  total_r: number;
  current_p: number;
  errorMessage: string;
  showErrorHTML: boolean = false;

  //Dependency Injection
  constructor(private _movieService: MovieService){
    _movieService
  }
  ngOnInit(): void{
    this._movieService.getMovie()
    .subscribe(
      movies => {
        this.movies = movies['results'];
        this.total_p = movies['total_pages'];
        this.total_r = movies['total_results'];
        this.current_p = movies['page'];
      },
      error => this.errorMessage = <any>error
    );
  }
  setPage(page){
    if(this.current_p >= 1 && this.current_p < this.total_p){
      this._movieService.setPage(page);
      this.ngOnInit();
    }else if(page > this.total_p){
      this.showError("Invalid Page");
    }
  }
  showError(message:string){
    this.errorMessage = message;
    this.showErrorHTML = true;
  }
}
