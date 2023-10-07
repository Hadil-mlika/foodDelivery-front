import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing/restaurant-listing.component';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantListingModule,
    BrowserModule,
    AppRoutingModule,
    RestaurantListingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
