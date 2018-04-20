import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MathHeightDirective } from './math-height.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    FooterCompComponent,
    MenuComponent,
    CartComponent,
    MathHeightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
