import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

	title = "Название";

	page_name = "";

  constructor() { }

  ngOnInit() {
  }
	
	onSelectMenu(): void {
  	this.page_name = "Меню";
	}

	onSelectCart(): void {
  	this.page_name = "Корзина";
	}

}
