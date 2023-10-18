import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { OrderDTO } from '../models/orderDTO';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent {
  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];

    this.obj = JSON.parse(data);
    this.obj.userId = 2;

    this.orderSummary = this.obj;
    console.log(data, this.orderSummary);

    if (this.orderSummary && this.orderSummary.foodItemsList) {
      this.total = this.orderSummary.foodItemsList.reduce(
        (accumulator, currentValue) => {
          // Vérifier si currentValue et currentValue.price sont définis
          if (currentValue && currentValue.price !== undefined) {
            return accumulator + currentValue.quantity * currentValue.price;
          }
          return accumulator;
        },
        0
      );
    } else {
      this.total = 0; // Ou une valeur par défaut appropriée si orderSummary ou foodItemsList est undefined
    }
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary).subscribe(
      (response) => {
        this.showDialog = true;
      },
      (error) => {
        console.error('Failed to save data:', error);
      }
    );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }
}
