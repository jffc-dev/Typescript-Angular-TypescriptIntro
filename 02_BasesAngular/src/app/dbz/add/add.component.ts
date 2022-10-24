import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public add = (): void => {
    if(this.newCharacter.name.trim().length === 0){
      return;
    }

    // this.charactersList.push(this.newCharacter);
    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
