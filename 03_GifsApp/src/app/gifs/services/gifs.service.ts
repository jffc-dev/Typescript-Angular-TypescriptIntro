import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "ReJxeK0bqqIke98ehJl8bdDJjanhnRyy";
  private _history: string[] = [];

  get history(){
    return [...this._history];
  }

  public searchGifs = (query: string):void => {

    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    console.log(this._history);
  }
}
