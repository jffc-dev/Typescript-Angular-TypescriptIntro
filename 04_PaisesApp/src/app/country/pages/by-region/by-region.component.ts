import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];

  activeRegion: string = '';

  getCssClass(region: string){
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  constructor(private countryService: CountryService) { }

  toActiveRegion = (region: string) => {

    if(region === this.activeRegion){return;}

    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchByRegion(region)
      .subscribe({
        next: (countryResp) => {
          this.countries = countryResp;
        },
        error: (error) => {console.log(error);
        }
    });
  }

}
