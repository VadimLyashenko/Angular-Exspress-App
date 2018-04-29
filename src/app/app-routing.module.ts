import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }      from './menu/menu.component';
import { CartComponent }      from './cart/cart.component';
import { ContactsComponent }      from './contacts/contacts.component';
import { MainComponent }      from './main/main.component';
import { NotfoundComponent }      from './notfound/notfound.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: MainComponent },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}