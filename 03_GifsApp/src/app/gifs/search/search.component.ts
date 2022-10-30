import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  //Non-Null Assertion Operator
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  public search = () : void => {

    const val = this.txtSearch.nativeElement.value;
    this.gifsService.searchGifs(val);
    this.txtSearch.nativeElement.value = '';
  }

  constructor(private gifsService: GifsService){}
}
