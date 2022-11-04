import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "ReJxeK0bqqIke98ehJl8bdDJjanhnRyy";
  private _history: string[] = [];

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

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=ReJxeK0bqqIke98ehJl8bdDJjanhnRyy&q=gohan&limit=10')
      .subscribe((resp:any) => {
        console.log(resp.data);
      })

    console.log(this._history);
  }
}
