import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing/restaurant-listing.component';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/components/header.component';
import { HeaderModule } from './header/header.module';

import { FoodCatalogueModule } from './food-catalogue/food-catalogue.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantListingModule,
    BrowserModule,
    AppRoutingModule,
    RestaurantListingModule,
    HttpClientModule,
    HeaderModule,
    FoodCatalogueModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
