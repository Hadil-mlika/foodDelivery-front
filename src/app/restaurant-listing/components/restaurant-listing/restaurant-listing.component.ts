import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../service/restaurant.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {



  public restaurantList: Restaurant[];
  currentImage: string = this.getRandomImage();

  ngOnInit() {
    this.getAllRestaurants();

      // Changer l'image toutes les 5 secondes
  setInterval(() => {
    this.currentImage = this.getRandomImage();
  }, 5000); // 5000 ms = 5 secondes
  }

  constructor(private router: Router, private restaurantService: RestaurantService) {
    this.restaurantList = [];  // Initialisation dans le constructeur
   }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("hhhhh");
  }

  getRestaurantImagePath(restaurant: Restaurant): string {
    return `assets/restaurants-pics/${restaurant.id}/` + this.getRandomImage();
  }
  

  getRandomImage(): string {
    const imageCount = 5; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }

}
