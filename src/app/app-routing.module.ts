import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }      from './menu/menu.component';
import { CartComponent }      from './cart/cart.component';
import { ContactsComponent }      from './contacts/contacts.component';
import { MainComponent }      from './main/main.component';
import { NotfoundComponent }      from './notfound/notfound.component';
import { LoginComponent }      from './login/login.component';
import { SignupComponent }      from './signup/signup.component';
import { AdminComponent }      from './admin/admin.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
	{ path: 'contacts', component: ContactsComponent },
	{path: 'login',
    component: LoginComponent,
		data: { title: 'Login' }
	},
	{
    path: 'reg',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
	{ path: 'admin', component: AdminComponent },
  { path: '', component: MainComponent },
	{ path: '**', component: NotfoundComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}