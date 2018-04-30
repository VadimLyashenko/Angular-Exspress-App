import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

import { Order } from '../data/order';
import { Orders } from "../data/orderies";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(name, tel, address, allcost) {
    // if(name && tel && address){
  	 //  Orders.push({
  	 //  	title: name,
		  // 	tel: tel,
		  // 	address: address,
		  // 	allcost: allcost,
		  // 	status: 'open',
		  // 	cart_positions: Carties.slice() });
  	  
    //   console.log(Orders);

    //   Carties.length = 0;
    // }
    let body = JSON.stringify({});
    console.log(body);
    return this.http.post('/order', body, httpOptions);
  }
}
