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

  public clientsMap = {
    '=0': 'there are no clients waiting.',
    '=1': 'there is 1 client waiting.',
    'other': 'there are # clients waiting.'
  }

  //i18n Plural
  public clients: string[] = ['Javier','Nancy','Fernando','Victoria','Maximo'];


  public removeClient = ():void => {
    this.clients.pop();
  }
}
