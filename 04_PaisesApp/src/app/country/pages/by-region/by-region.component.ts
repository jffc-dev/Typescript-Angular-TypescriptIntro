import { Component, OnInit } from '@angular/core';

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

  activeRegion: string = '';

  constructor() { }

  toActiveRegion = (region: string) => {
    this.activeRegion = region;
  }

}
