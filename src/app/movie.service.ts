import { Injectable } from '@angular/core';
import { IMovieData } from './IMovieData';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService{
  movies: IMovieData[] = [];
  pages: number;
  page: number = 1;
  apiKey: string = '579680975c0a476a8906708b0cc45739';
  url: string = `https://api.themoviedb.org/3/movie/popular?api_key=579680975c0a476a8906708b0cc45739&language=en-US&page=${this.page}`;

  constructor(private _http: Http){
  }
  getMovie(): Observable<IMovieData[]> {
    this.url = `https://api.themoviedb.org/3/movie/popular?api_key=579680975c0a476a8906708b0cc45739&language=en-US&page=${this.page}`;
    return this._http.get(this.url)
    .map((response: Response) => <IMovieData[]>response.json())
    .do(data => console.log('All ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  setPage(page){
    this.page = page; //page has to reload and url assigned newly
    this.getMovie();
    console.log("test" + this.page);
    console.log(this.url);
  }
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
