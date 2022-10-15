import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor() {
    console.log("Hello from constructor");

   }

  ngOnInit(): void {
    console.log("Hello from onInit");
  }

}
