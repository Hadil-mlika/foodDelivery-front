import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL_RL } from 'src/app/constants/url';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = API_URL_RL + '/restaurant/fetchAllRestaurants';

  constructor(private http: HttpClient) {}

  getAllRestaurants(): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
