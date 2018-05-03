import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(name, tel, address, allcost) {
    if(name && tel && address){
			let body = JSON.stringify({ title: name, tel: tel, address: address, allcost: allcost, cart_positions: Carties});
			Carties.length = 0;
			return this.http.post('/order', body, httpOptions);
		}
	}
}
