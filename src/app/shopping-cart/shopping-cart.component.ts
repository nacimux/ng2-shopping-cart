import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: []
})
export class ShoppingCartComponent implements OnInit {
  @Input()items: any[];


  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getData()
    .subscribe((response: any) => {
      this.items = response.data;
    });
  }

}



