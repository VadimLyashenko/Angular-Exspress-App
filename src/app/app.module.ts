import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MathHeightDirective } from './math-height.directive';

import { CategoryService } from './service/category.service';
import { CartService } from './service/cart.service';
import { OrderService } from './service/order.service';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    FooterCompComponent,
    MenuComponent,
    CartComponent,
    MathHeightDirective,
    ContactsComponent,
    MainComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgD_C_GT1KDaNdbssbRmWU8zHvcQbYUgw'
    })
  ],
  providers: [
    CategoryService,
    CartService,
    OrderService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
