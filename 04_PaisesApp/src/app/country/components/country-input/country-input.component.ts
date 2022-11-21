import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  searched: string = "";

  search = ():void => {
    this.onEnter.emit(this.searched);
  }

}
