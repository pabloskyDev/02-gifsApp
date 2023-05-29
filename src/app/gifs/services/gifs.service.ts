import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];
  private _history: string[] = [];
  private apiKey: string = '2XAfzXpHGAzP5pIDHx6t7r3x6iKsUsiZ';
  private serviceUrl: string  = 'https://api.giphy.com/v1/gifs';

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get history() {
    return [...this._history];
  }

  orderHistory(query: string) {
    query = query.trim().toLowerCase();

    if(this._history.includes(query)){
      this._history = this._history.filter((oldQuery => oldQuery !== query));
    }

    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._history));
  }

  private loadLocalStorage() {
    if(!localStorage.getItem('history')) return
    this._history = JSON.parse(localStorage.getItem('history')! );

    if(this._history.length === 0) return
    this.searchGifs(this._history[0]);
  }

  async searchGifs(query: string = ''): Promise<void> {
    if(query.length === 0) return;
    this.orderHistory(query);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( resp => {
        this.gifList = resp.data;
      })

    /* Peticiones asíncronas
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=2XAfzXpHGAzP5pIDHx6t7r3x6iKsUsiZ&q=${query}`)
      const data = await resp.json();
      console.log(data);
    */

  }
}
