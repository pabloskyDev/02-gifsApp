import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'custom-gif-card-body',
  templateUrl: './gif-card-body.component.html',
  styleUrls: ['./gif-card-body.component.scss']
})
export class GifCardBodyComponent {
  @Input() gif!:Gif;
}
