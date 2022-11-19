import { Component } from '@angular/core';
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

  constructor(private paisService: CountryService) { }

  search = ():void => {
    this.thereIsError = false;
    console.log(this.searched);
    this.paisService.searchByCountry(this.searched)
      .subscribe(
        (country) => {console.log(country)},
        (error) => {this.thereIsError = true;}
      );
  }

}
