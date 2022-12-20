import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {

  searched: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countriesService: CountryService) { }

  search = (searched: string):void => {
    this.searched = searched;
    this.thereIsError = false;
    console.log(this.searched);
    this.countriesService.searchByCountry(this.searched)
      .subscribe({
        next: (countryResp) => {
          this.countries = countryResp;
          console.log(this.countries[0])
        },
        error: (error) => {this.thereIsError = true;}
    });
  }

  onShowSuggestions = (searched: string):void => {

    this.thereIsError = false;
    this.searched = searched;
    this.showSuggestions = true;

    this.countriesService.searchByCountry(searched)
      .subscribe(
        resp => this.suggestedCountries = resp.splice(0,3),
        err => this.thereIsError = true
      )
  }

  searchSuggested = (searched: string):void => {
    this.search(searched);
    this.showSuggestions = false;
  }

}
