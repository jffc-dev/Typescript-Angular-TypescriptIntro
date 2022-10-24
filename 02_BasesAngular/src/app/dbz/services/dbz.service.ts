import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DBZService{
  constructor(){
    console.log('Initialized service');
  }

  private _charactersList: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 14000
    }
  ];

  get charactersList(): Character[]{
    return [...this._charactersList];
  }
}
