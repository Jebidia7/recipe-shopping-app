import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];
  isEditing = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListService.shoppingList.subscribe(shoppingList => this.shoppingList = shoppingList);
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  onEditButtonClick() {
    this.isEditing = !this.isEditing;
  }
}
