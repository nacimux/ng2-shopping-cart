import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingSingleItemComponent } from './shopping-items/shopping-single-item/shopping-single-item.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingItemsComponent,
    ShoppingSingleItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
