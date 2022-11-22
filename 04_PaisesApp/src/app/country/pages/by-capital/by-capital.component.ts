import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  searched: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: CountryService) { }

  search = (searched: string):void => {
    this.searched = searched;
    this.thereIsError = false;
    console.log(this.searched);
    this.paisService.searchByCapital(this.searched)
      .subscribe({
        next: (countryResp) => {
          this.countries = countryResp;
          console.log(this.countries[0])
        },
        error: (error) => {this.thereIsError = true;}
    });
  }

  showSuggestions = (searched: string):void => {
    //TODO: create suggestions
    console.log(searched);
    this.thereIsError = false;
  }
}
