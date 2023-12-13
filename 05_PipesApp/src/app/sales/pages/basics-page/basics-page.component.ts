import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  nameLower: string = "javier";
  nameUpper: string = "FLORES";
  nameFull: string = "JaVIER FlorES";

  today: Date = new Date();
}
