import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from 'src/app/shared/models/foodCataloguePage';
import { FoodItem } from 'src/app/shared/models/foodItem';
import { FooditemService } from '../service/fooditem.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent {
  restaurantId!: number;
  foodItemResponse!: FoodCataloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary!: FoodCataloguePage;


  constructor(private route: ActivatedRoute, private foodItemService: FooditemService, private router: Router) {
  }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.restaurantId = +idParam;
        this.getFoodItemsByRestaurant(this.restaurantId);
      } else {
        // Gérer le cas où 'id' est null
        console.error('L\'ID du restaurant est null.');
      }
    });
  }
  


  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant).subscribe(
      data => {
        this.foodItemResponse = data;

      }
    )
  }

  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }

    }
  }


  onCheckOut() {

    this.orderSummary = {
      foodItemsList: [],
      restaurant:  {} as Restaurant // Initialisation avec un objet vide de type Restaurant
    };
    // this.orderSummary.foodItemsList = this.foodItemResponse.foodItemsList;
    // this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    // console.log(this.orderSummary)
    // this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });




    
    // Filtrer les foodItems dont la quantité est > 0
    const foodItemsWithQuantity = this.foodItemResponse.foodItemsList.filter(
      (foodItem) => foodItem.quantity > 0
    );

    // Affecter les foodItems filtrés et le restaurant à orderSummary
    this.orderSummary.foodItemsList = foodItemsWithQuantity;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;

    console.log(this.orderSummary);

    // Naviguer vers '/orderSummary' avec les données filtrées
    this.router.navigate(['/orderSummary'], {
      queryParams: { data: JSON.stringify(this.orderSummary) },
    });
  }
  


}
