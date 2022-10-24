import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  // @Input('data') charactersList: Character[] = [];

  get charactersList():Character[]{
    return this.dbzService.charactersList;
  }

  constructor(private dbzService: DBZService){

  }

}
