import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h5>The base is: {{base}}</h5>

    <button (click)="acumulate(-1 * base)">-{{base}}</button>
    <span>{{number}}</span>
    <button (click)="acumulate(base)">+{{base}}</button>
  `
})
export class CounterComponent{
  public title: string = 'Contador App';
  public number: number = 0;
  public base: number = 5;

  sumar(){
    this.number++;
  }

  restar(){
    this.number--;
  }

  acumulate(value: number){
    this.number += value;
  }
}
