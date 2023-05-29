import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifCardImgComponent } from './components/gif-card-img/gif-card-img.component';
import { GifCardBodyComponent } from './components/gif-card-body/gif-card-body.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent,
    GifCardComponent,
    GifCardImgComponent,
    GifCardBodyComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
