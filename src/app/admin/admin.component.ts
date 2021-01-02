import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    
    this.orderService.getOrders()
      .subscribe(orders =>{ 
        this.orders = orders.json();
        console.log(orders);
      });
  }
}
