import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "ReJxeK0bqqIke98ehJl8bdDJjanhnRyy";
  private _history: string[] = [];

  public results: Gif[] = [];

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient){
    if(localStorage.getItem('history')){
      this._history = JSON.parse(localStorage.getItem('history')!);
    }
    if(localStorage.getItem('results')){
      this.results = JSON.parse(localStorage.getItem('results')!);
    }
  }

  public searchGifs = (query: string):void => {

    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);

      localStorage.setItem('history',JSON.stringify(this._history))
    }

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=10&lang=es`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        localStorage.setItem('results',JSON.stringify(this.results))
      })
  }
}
