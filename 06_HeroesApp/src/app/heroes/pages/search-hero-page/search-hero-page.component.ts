import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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
  public selectedHero?: Hero

  searchHero(){
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions(value).subscribe(


      heroes => {this.heroes = heroes
        console.log(heroes);}
    )
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero)
    this.selectedHero = hero

  }
}
