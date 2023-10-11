import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrderSummaryComponent } from './component/order-summary.component'; 
import { OrderSummaryRoutingModule } from './order-summary-rounting.module';


@NgModule({
  declarations: [
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    OrderSummaryRoutingModule
  ]
})
export class OrderSummaryModule { }