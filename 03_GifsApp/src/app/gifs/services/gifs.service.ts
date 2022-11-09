import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
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

    const params = new HttpParams()
      .set('api_key',this._apiKey)
      .set('limit','10')
      .set('lang','es')
      .set('q',query);

    this.http.get<SearchGIFResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        localStorage.setItem('results',JSON.stringify(this.results))
      })
  }
}
