import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FoodCatalogueComponent } from "./components/food-catalogue.component";
import { FoodCatalogueRoutingModule } from "./food-catalogue-rounting-module";

@NgModule({
    declarations: [
      FoodCatalogueComponent
    ],
    imports: [
      CommonModule,
      FoodCatalogueRoutingModule
    ]
  })
  export class FoodCatalogueModule { }