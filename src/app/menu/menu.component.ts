import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class UserCart {
	// img: string,
	title: string;
	cost: string;
	count: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

	categories: any;
	sel_category: any;
	item: any;
	count: any = 1;
	cart: UserCart[];
	
  constructor(private http: HttpClient) { }

  ngOnInit() {
			this.http.get('/category').subscribe(data => {
			this.categories = data;
  	});
  }

  onSelect(sel_category): void {
 		this.sel_category = sel_category;
	}

	onMinus(): void {
		if(this.count >1)
 		this.count--;
	}

	onPlus(): void {
 		this.count++;
	}

	inCart(item, count): void {
 		this.cart = [{ title: item.title, cost: item.cost, count: count }];
 	}
}
