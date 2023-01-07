import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = "javier";
  nameUpper: string = "FLORES";
  nameFull: string = "JaVIER FlorES";

  today: Date = new Date();
}
