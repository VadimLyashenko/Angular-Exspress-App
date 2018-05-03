import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Carties } from "../data/carties";

import { CategoryService } from '../service/category.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('Cat_State', [
      state('inactive', style({
      })),
      state('active',   style({
        backgroundColor: '#daae4f',
        transform: 'scale(0.98)'
      })),
      transition('inactive => active', animate('80ms ease-in')),
      transition('active => inactive', animate('80ms ease-out'))
    ]),
    trigger('flyIn',[
      transition('void => *', [
          animate(300, keyframes([
						style({opacity: 0.5, offset: 0}),
						style({opacity: 0.9, offset: 0.5}),
						style({opacity: 1, offset: 1.0})
          ]))
        ])
    ]),
    trigger('dropMenu',[
      transition('void => *', [
        animate(250, keyframes([
            style({opacity: 0, transform: 'translateY(-35%)', offset: 0}),
            style({opacity: 0.3,transform: 'translateY(-10%)', offset: 0.5}),
            style({opacity: 1,transform: 'translateY(0%)', offset: 1.0})
          ]))
        ]),
      transition('* => void', [
        animate(250, style({ height: 0, opacity: 0.2, transform: 'scaleY(0.2)' }))
        ])
    ])
  ]
})

export class MenuComponent implements OnInit {
	
	categories: any;
	sel_category: any;
  active_drop_button: boolean = false;

  constructor(private categoryService: CategoryService, private cartService: CartService) { }

  ngOnInit() {
  	this.getCategories();
  }

  getCategories(): void {
  	this.categoryService.getCategories().subscribe(
        categories => this.categories = categories,
        err => console.log(err),
        () => this.checkStatus(this.categories)
    );
    
  }

  checkStatus(caregories: any){
    caregories.forEach(function(cat_item){
      cat_item.positions.forEach(function(pos_item){
        Carties.forEach(function(cart_item){
          if(pos_item.id == cart_item.id){
            pos_item.status = false;
          }    
         })       
      })
    })
    caregories[0].state = 'active';
  }

  toggleState(sel_category){
    this.categories.forEach(function(cat_item){
      if(cat_item == sel_category){
        cat_item.state = 'active';
      }
      else
        cat_item.state = 'inactive';
    })
  }

  addCarties(item): void {
    this.cartService.addCarties(item); 
  }

  onSelect(sel_category): void {
 		this.sel_category = sel_category;
	}

	onMinus(item): void {
		if(item.count >1)
 		item.count--;
	}

	onPlus(item): void {
 		item.count++;
	}

  updateInput(value, item): void{
    this.categoryService.updateCount(value, item);
  }

  showMenu(active_drop_button): void {
    if(active_drop_button == false)
      this.active_drop_button = true;
    else
      this.active_drop_button = false;
  }
}
