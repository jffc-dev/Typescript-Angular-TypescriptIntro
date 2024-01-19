import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styles: [
  ]
})
export class SearchHeroPageComponent {

  constructor(private heroesService: HeroesService){}

  public searchInput = new FormControl('')
}
