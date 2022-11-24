import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styles: [
  ]
})
export class DetailCountryComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id);

        this.countryService.getCountryByCode(id)
        .subscribe((country) => {
          console.log(country[0]);
        })
      })
  }

}
