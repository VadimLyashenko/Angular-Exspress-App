import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer-comp',
  templateUrl: './footer-comp.component.html',
  styleUrls: ['./footer-comp.component.css']
})
export class FooterCompComponent implements OnInit {

	bg_check: boolean = true;
	footer_check: boolean = true;

  constructor(private _router: Router) { }

  ngOnInit() {
  	this.getRoute()
  }

  getRoute(){
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/'){
          this.bg_check = false;
        }
        if(event.url == '/menu'){
          this.bg_check = true;
        }
        if(event.url == '/cart'){
          this.bg_check = true;
        }
        if(event.url == '/contacts'){
          this.bg_check = true;
        }
				if(event.url == '/admin'){
					this.footer_check = false;
        }
      }
    })
  }
}
