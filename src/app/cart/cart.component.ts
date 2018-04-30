import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Cart } from '../data/cart';
import { CartService } from '../service/cart.service';

import { Order } from '../data/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
  	trigger('flyOut',[
  		transition('* => void', [
  				animate(250, style({ height: 0, opacity: 0.2, transform: 'scale(0.6)' }))
  			])
  	]),
    trigger('flyIn',[
      transition('void => *', [
          animate(300, keyframes([
            style({opacity: 0, transform: 'scale(0.8)', offset: 0}),
            style({opacity: 0.5, transform: 'scale(0.9)', offset: 0.5}),
            style({opacity: 1, transform: 'scale(1.0)', offset: 1.0})
          ]))
        ])
    ])
  ]
})
export class CartComponent implements OnInit {

	cart: Cart[];
  allcost: number = this.cartService.GetAllCost();
  name: string;
  tel: string;
  address: string;

  order_check: boolean = true;

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
  	this.getCart();
  }

  getCart(): void {
  	this.cartService.getCart().subscribe(cart => this.cart = cart);
  }

  delCart(item): void{
  	this.cartService.delCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  onMinusCart(item): void {
    this.cartService.onMinusCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  onPlusCart(item): void {
    this.cartService.onPlusCart(item);
    this.allcost = this.cartService.GetAllCost();
  }

  updateInput(value, item): void{
    this.cartService.updateCount(value, item);
    this.allcost = this.cartService.GetAllCost();
  }

  updateInputName(value): void{
    this.name = value;
  }

  updateInputTel(value): void{
    this.tel = value;
  }

  updateInputAddress(value): void{
    this.address = value;
  }

  addOrder(): void{
    this.order_check = false;
    let a = this.orderService.addOrder(this.name, this.tel, this.address, this.allcost);
    console.log(a);
  }
}
