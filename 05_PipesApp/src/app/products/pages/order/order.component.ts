import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderField: keyof Hero | '' = ''

  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'iron man',
      canFly: false,
      color: Color.blue
    }
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase
  }

  changeSortField = (sortField: keyof Hero):void => {
    this.orderField = sortField
  }

}
