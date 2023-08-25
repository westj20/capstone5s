import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { NavBarLandingComponent } from './nav-bar-landing/nav-bar-landing.component';
import { PricePackageComponent } from './price-package/price-package.component';
import { TourComponent } from './Tour/Tour.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@NgModule({
  declarations: [						
    AppComponent,
      PriceCardComponent,
      NavBarLandingComponent,
      PricePackageComponent,
      TourComponent,
      FeaturesComponent,
      FeatureCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
