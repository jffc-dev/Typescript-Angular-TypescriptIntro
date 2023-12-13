import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './sales/pages/basics-page/basics-page.component';
import { UncommonsPageComponent } from './sales/pages/uncommons-page/uncommons-page.component';
import { NumbersPageComponent } from './sales/pages/numbers-page/numbers-page.component';
import { SortComponent } from './sales/pages/sort/sort.component';

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
