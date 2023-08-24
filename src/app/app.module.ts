import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { NavBarLandingComponent } from './nav-bar-landing/nav-bar-landing.component';
import { PricePackageComponent } from './price-package/price-package.component';

@NgModule({
  declarations: [			
    AppComponent,
      PriceCardComponent,
      NavBarLandingComponent,
      PricePackageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
