import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  searched: string = "";

  constructor() { }

  search = ():void => {
    console.log(this.searched);
  }

}
