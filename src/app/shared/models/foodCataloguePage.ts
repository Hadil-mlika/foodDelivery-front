import { Restaurant } from "./Restaurant";
import { FoodItem } from "./foodItem";

export interface FoodCataloguePage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}