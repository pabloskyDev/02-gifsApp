import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'custom-gif-card-img',
  templateUrl: './gif-card-img.component.html',
  styleUrls: ['./gif-card-img.component.scss']
})
export class GifCardImgComponent {
  @Input() gif!:Gif;
}
