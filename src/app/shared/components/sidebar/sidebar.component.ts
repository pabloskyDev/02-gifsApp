import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'custom-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  get history(): string[] {
    return this.gifsService.history;
  }

  constructor(
    private gifsService: GifsService
  ) {}

  searchTag(tag: string) {
    this.gifsService.searchGifs(tag);
  }
}
