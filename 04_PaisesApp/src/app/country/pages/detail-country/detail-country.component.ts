import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styles: [
  ]
})
export class DetailCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.countryService.getCountryByCode(id))
      )
      .subscribe((resp) => {
        this.country = resp[0];
        console.log(resp[0]);
      })
  }

}
