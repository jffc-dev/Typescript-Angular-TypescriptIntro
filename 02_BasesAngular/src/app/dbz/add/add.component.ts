import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input('data') charactersList: Character[] = [];
  @Input() newCharacter: Character = {
    name: '',
    power: 0
  };


  public add = (): void => {
    if(this.newCharacter.name.trim().length === 0){
      return;
    }

    this.charactersList.push(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
