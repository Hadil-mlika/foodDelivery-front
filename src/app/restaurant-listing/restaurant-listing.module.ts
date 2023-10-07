import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RestaurantListingComponent } from "./components/restaurant-listing/restaurant-listing.component";
import { RestaurantListingRoutingModule } from "./restaurant-listing-rounting.module";

@NgModule({
    declarations: [
      RestaurantListingComponent
    ],
    imports: [
      CommonModule,
      RestaurantListingRoutingModule
    ]
  })
  export class RestaurantListingModule { }