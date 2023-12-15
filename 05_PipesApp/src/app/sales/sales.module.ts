import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [
    NumbersPageComponent,
    UncommonsPageComponent,
    BasicsPageComponent,
    SortComponent,
    OrderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
