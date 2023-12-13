import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonsComponent } from './pages/uncommons/uncommons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [
    NumbersComponent,
    UncommonsComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    PrimeNgModule,
    PanelModule,
    FieldsetModule
  ]
})
export class SalesModule { }
