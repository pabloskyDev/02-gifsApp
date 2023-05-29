import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifCardBodyComponent } from './components/gif-card-body/gif-card-body.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent,
    GifCardComponent,
    GifCardBodyComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GifsModule { }
