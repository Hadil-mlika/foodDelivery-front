import { Restaurant } from "./Restaurant";
import { FoodItem } from "./foodItem";

export interface FoodCataloguePage{
    foodItemList:FoodItem[];
    restaurant:Restaurant;
}