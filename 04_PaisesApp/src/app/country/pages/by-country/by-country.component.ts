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

  constructor(private paisService: CountryService) { }

  search = ():void => {
    console.log(this.searched);
    this.paisService.searchByCountry(this.searched)
      .subscribe( resp => console.log(resp)
      );
  }

}
