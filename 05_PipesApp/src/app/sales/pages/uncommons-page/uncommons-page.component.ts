import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommons',
  templateUrl: './uncommons-page.component.html',
  styles: [
  ]
})
export class UncommonsPageComponent {

  //i18n Select
  public name: string = 'Javier';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'Mr.',
    'female': 'Mrs.'
  }

  public changeClient = ():void => {
    this.name = "Nancy";
    this.gender = 'female';
  }
}
