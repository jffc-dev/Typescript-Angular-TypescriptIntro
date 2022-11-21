import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  searched: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: CountryService) { }

  search = (searched: string):void => {
    this.searched = searched;
    this.thereIsError = false;
    console.log(this.searched);
    this.paisService.searchByCountry(this.searched)
      .subscribe({
        next: (countryResp) => {
          this.countries = countryResp;
          console.log(this.countries[0])
        },
        error: (error) => {this.thereIsError = true;}
    });
  }

}
