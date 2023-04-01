import { Component, OnDestroy, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingList: Ingredient[] = [];
  private shoppingListSub: Subscription;
  isEditing = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingListSub =
      this.shoppingListService.shoppingList.subscribe(shoppingList => this.shoppingList = shoppingList);
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  ngOnDestroy(): void {
    this.shoppingListSub.unsubscribe();
  }

  onEditButtonClick() {
    this.isEditing = !this.isEditing;
  }
}
