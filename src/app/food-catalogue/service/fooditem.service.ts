import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL_FC } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {


  private apiUrl = API_URL_FC+'/foodCatalogue/fetchRestaurantAndFoodItemById/';

  constructor(private http: HttpClient) { }

  getFoodItemsByRestaurant(id:number): Observable<any> {

      return this.http.get<any>(`${this.apiUrl+id}`)
      
        .pipe(
          catchError(this.handleError)
     
        );
 
    }
  
    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(error.message || error);
    }

}
