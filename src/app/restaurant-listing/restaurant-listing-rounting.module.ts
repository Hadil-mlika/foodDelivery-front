import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantListingComponent } from "./components/restaurant-listing/restaurant-listing.component";



const routes: Routes = [
    { path: '', component: RestaurantListingComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RestaurantListingRoutingModule { }
  