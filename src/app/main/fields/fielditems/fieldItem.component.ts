import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldItem',
  templateUrl: 'fieldItem.component.html',
  styleUrls: ['fieldItem.component.css']
})

export class FieldItemComponent{
  @Input() original_title: string;
  @Input() vote_average: number;
  @Input() poster_path: string;
  @Input() overview: string;
  @Input() release_date: string;
}
