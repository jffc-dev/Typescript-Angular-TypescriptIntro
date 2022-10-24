import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DBZService){

  }

  charactersList: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 14000
    }
  ]

  newCharacter: Character = {
    name: '',
    power: 0
  }

  public addNewCharacter = (character: Character): void => {
    this.charactersList.push(character);
  }

}
