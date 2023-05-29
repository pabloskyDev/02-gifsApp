import { Component, Input } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'custom-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input()
  public gifs: Gif[] = [];
}
