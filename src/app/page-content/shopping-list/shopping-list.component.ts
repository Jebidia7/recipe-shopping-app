import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  isEditing = false;

  constructor() {

  }

  ngOnInit(): void {

    this.ingredients = Array.from(Array(10).keys(), (value, i) => {
      return new Ingredient(
        `Some Item Name '${value}'`,
        Math.round(Math.random() * 10 + i)
      );
    })
  }


  onEditButtonClick() {
    this.isEditing = !this.isEditing;
  }
}
