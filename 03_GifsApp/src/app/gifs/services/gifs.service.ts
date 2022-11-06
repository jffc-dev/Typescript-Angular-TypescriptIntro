import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "ReJxeK0bqqIke98ehJl8bdDJjanhnRyy";
  private _history: string[] = [];

  public resultados: Gif[] = [];

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient){}

  public searchGifs = (query: string):void => {

    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=ReJxeK0bqqIke98ehJl8bdDJjanhnRyy&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })

    console.log(this._history);
  }
}
