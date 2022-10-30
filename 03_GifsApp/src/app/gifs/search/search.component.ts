import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
    console.log(val);
    this.txtSearch.nativeElement.value = '';
  }
}
