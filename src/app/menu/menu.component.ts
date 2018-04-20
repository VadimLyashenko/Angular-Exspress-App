import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	categories: any;
	sel_category: any;

  // Position[] = [ { id: 1, name: "Томатный суп", cost: "300р", 
  // 	desc 	 : "ингридиент-1, ингиеыыснт-2, ингридиент-3",
		// weight : "300г",
		// img		 : "assets/img/tomato-soup.png",
		// id_category: 1},
		// { id: 2, name: "Каша", cost: "1500р", 
  // 	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		// weight : "2000г",
		// img		 : "assets/img/tomato-soup.png",
		// id_category: 1},
		// { id: 2, name: "Каша", cost: "1500р", 
  // 	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		// weight : "2000г",
		// img		 : "assets/img/tomato-soup.png",
		// id_category: 1},
		// { id: 2, name: "Каша", cost: "1500р", 
  // 	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		// weight : "2000г",
		// img		 : "assets/img/tomato-soup.png",
		// id_category: 1},
		// { id: 2, name: "Каша", cost: "1500р", 
  // 	desc 	 : "ингриди2222нт-1, ингиеыыснт-45, ингридиент-3",
		// weight : "2000г",
		// img		 : "assets/img/tomato-soup.png",
		// id_category: 1}
  // ]
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
			this.http.get('/category').subscribe(data => {
			this.categories = data;
  	});
  }

  onSelect(sel_category): void {
 		this.sel_category = sel_category;
	}

}
