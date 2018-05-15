import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  getCategories(): any {
  	return this.http.get('api/category');
  }

  updateCount(value, item): void{
  		item.count = value;
  }

}
