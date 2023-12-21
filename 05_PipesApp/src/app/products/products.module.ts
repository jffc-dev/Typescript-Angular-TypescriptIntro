import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { SortComponent } from './pages/sort/sort.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CanFLyPipe } from './pipes/canFly.pipe';


@NgModule({
  declarations: [
    NumbersPageComponent,
    UncommonsPageComponent,
    BasicsPageComponent,
    SortComponent,
    OrderComponent,

    //Pipes
    ToggleCasePipe,
    CanFLyPipe
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
