import { Component } from '@angular/core';
import { IProps } from '../../interfaces/IProps';
import { MoviesService } from '../../services/movies.service';

@Component({
  templateUrl: 'pop.component.html',
  styleUrls: ['pop.component.css']
})

export class PopComponent{
  props: IProps[] = [];
  current_p: number;
  total_p: number;
  total_r: number;
  errorMessage: string;

  constructor(private _moviesService: MoviesService){
  }
  ngOnInit(page?){
    this._moviesService.getProps('popular', page)
    .subscribe(props =>{
      this.props = props["results"];
      this.current_p = props["page"];
      this.total_p = props["total_pages"];
    },
      error => this.errorMessage = <any>error
    );
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
