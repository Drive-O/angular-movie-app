import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProps } from '../interfaces/IProps';

@Injectable()
export class MoviesService{

  page: number = 1;
  url: string;
  lang: string = 'en'; //default

  private api_k:string = '579680975c0a476a8906708b0cc45739';

  constructor(private _http: Http){}
  //Type: popular, new
  setUrl(type:string, lang?: string, page?: number){
    this.url = `https://api.themoviedb.org/3/movie/${type}?api_key=${this.api_k}&language=${lang}-US&page=${page}`
  }
  getProps(type, page?) : Observable<IProps[]>{
    this.setUrl(type, this.lang, page);
    return this._http.get(this.url)
    .map((response:Response) => <IProps[]>response.json())
    .do(data => console.log('All ' +  JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(error: Response){
    console.error(error)
    return Observable.throw(error.json().error || 'Server error');
  }
}
