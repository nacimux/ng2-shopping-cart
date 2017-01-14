import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
@Input() items: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
