import { FoodItem } from "src/app/shared/models/foodItem";
import { Restaurant } from "src/app/shared/models/Restaurant";

export interface OrderDTO{

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}