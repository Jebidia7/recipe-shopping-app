import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {

  @Input() ingredient: Ingredient
  @Output() isChecked = new EventEmitter<Ingredient>();
  checked = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onChecked() {
    this.checked = !this.checked;
    if (this.checked) {
      this.shoppingListService.selectIngredient(this.ingredient);
    }
    else {
      this.shoppingListService.deselectIngredient(this.ingredient);
    }
  }
}
