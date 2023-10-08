import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from 'src/app/shared/models/foodCataloguePage';
import { FoodItem } from 'src/app/shared/models/foodItem';
import { FooditemService } from '../service/fooditem.service';

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

    // Initialiser l'ordre de résumé
    this.orderSummary = {
      foodItemList: this.foodItemCart,  // Utilisez this.foodItemCart
      restaurant: this.foodItemResponse.restaurant
    };
  
    // Naviguer vers la page de résumé de commande avec les données d'ordre
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }
  


}
