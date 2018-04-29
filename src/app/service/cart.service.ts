import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart } from '../data/cart';
import { Carties } from "../data/carties";

@Injectable()
export class CartService {

  constructor() { }

  getCart(): Observable<Cart[]>{
  	return of(Carties);
  }

  addCarties(item): void{   
    if(item.status && item.count != '' && item.count > 0 && item.count != '0' && Number.isInteger(Number(item.count))){ 
        item.status = false;
  	    Carties.push({id:item.id, img: item.img, title: item.title, cost: item.cost, count: Number(item.count) });
    }
  }

  delCart(item): void{
    let index = Carties.indexOf(item, 0);
  	Carties.splice(index, 1);
  }

  GetAllCost(): number{
    let allcost: number = 0;
    for(let i = 0; i < Carties.length; i++ ){
      allcost = allcost + Carties[i].cost * Carties[i].count;
    }
    return allcost;
  }

  onMinusCart(item): void {    
    if(item.count >1)
      item.count--;
  }

  onPlusCart(item): void {
    item.count++;
  }

  updateCount(value, item): void{
    if(value > 0 && value != '0' && value != '' && Number.isInteger(Number(value))) {
      item.count = Number(value);
    }
  }

}
