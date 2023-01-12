import {Component} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items = [];

  constructor() {
    this.items = Array.from(Array(10).keys(), (value, i) => {
      return {
        name: `Some Item Name '${value}'`,
        quantity: Math.random() * 10 + i
      };
    })
  }

}
