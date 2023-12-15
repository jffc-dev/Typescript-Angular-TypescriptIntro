import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SalesModule } from './products/sales.module';

// Custom module
import { SharedModule } from './shared/shared.module';

// Change app's local
import localeEsPe from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsPe);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SalesModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
