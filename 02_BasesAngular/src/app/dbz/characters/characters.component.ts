import { Component, OnInit } from '@angular/core';
import { Character } from '../main-page/main-page.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  charactersList: Character[] = [];

}
