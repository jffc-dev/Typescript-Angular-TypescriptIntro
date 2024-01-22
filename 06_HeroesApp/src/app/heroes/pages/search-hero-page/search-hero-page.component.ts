import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styles: [
  ]
})
export class SearchHeroPageComponent {

  constructor(private heroesService: HeroesService){}

  public searchInput = new FormControl('')
  public heroes: Hero[] = []

  searchHero(){
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions(value).subscribe(


      heroes => {this.heroes = heroes
        console.log(heroes);}
    )

  }
}
