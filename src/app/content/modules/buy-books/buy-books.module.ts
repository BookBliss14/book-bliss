import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BuyConfirmComponent } from './buy-confirm/buy-confirm.component';



@NgModule({
  declarations: [
    CartPageComponent,
    BuyConfirmComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyBooksModule { }
