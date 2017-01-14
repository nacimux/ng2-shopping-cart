import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shopping-single-item',
  templateUrl: './shopping-single-item.component.html',
  styles: [
    `
 

  `
  ]
})
export class ShoppingSingleItemComponent implements OnInit {
  @Input() singleItem: any;
  constructor() {}

  ngOnInit() {}
}
