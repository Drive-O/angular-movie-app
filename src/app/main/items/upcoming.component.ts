import { Component } from '@angular/core';
import { IProps } from '../../interfaces/IProps';
import { MoviesService } from '../../services/movies.service';

@Component({
  templateUrl: 'upcoming.component.html'
})

export class UpcomingComponent{
  props: IProps[] = [];
  current_p: number;
  total_p: number;
  total_r: number;
  errorMessage: string;

  constructor(private _moviesService: MoviesService){  }
  ngOnInit(page?){
    this._moviesService.getProps("upcoming", page)
    .subscribe(
      props => {
        this.props = props["results"];
        this.total_p = props["total_pages"];
        this.current_p = props["page"];
      }
    ),
    error => this.errorMessage = <any>error;
  }
  nextPage(){
    if(this.current_p >= 1 && this.current_p < this.total_p){
      let next_p = this.current_p + 1;
      this.ngOnInit(next_p);
    }
  }
  previousPage(){
    if(this.current_p <= this.total_p && this.current_p > 1){
      let prev_p = this.current_p - 1;
      this.ngOnInit(prev_p);
    }
  }
}
