import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';
import { UncommonsPageComponent } from './products/pages/uncommons-page/uncommons-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { SortComponent } from './products/pages/sort/sort.component';
import { OrderComponent } from './products/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommons',
    component: UncommonsPageComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
