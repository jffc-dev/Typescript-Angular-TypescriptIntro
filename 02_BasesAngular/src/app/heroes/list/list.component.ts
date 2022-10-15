import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  public heroes: string[] = ['Ironman', 'Superman', 'Spiderman', 'Batman', 'Hulk', 'Captain America'];
  public deletedHero: string = '';

  constructor() {
    console.log("Hello from constructor");

   }

  ngOnInit(): void {
    console.log("Hello from onInit");
  }

  public DeleteHero(): void{
    const dHero:string = this.heroes.pop() || '';
    this.deletedHero = dHero;
  }

}
