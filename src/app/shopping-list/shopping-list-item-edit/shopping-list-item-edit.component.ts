import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list-item-edit',
  templateUrl: './shopping-list-item-edit.component.html',
  styleUrls: ['./shopping-list-item-edit.component.css']
})
export class ShoppingListItemEditComponent implements OnInit, OnDestroy {

  @ViewChild('editShoppingListItemForm')
  editShoppingListItemForm: NgForm;

  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscription =
      this.shoppingListService.startedEditing.subscribe(index => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.editShoppingListItemForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.quantity
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onAddNewItem(form: NgForm) {

    const name = form.value.name;
    const amount = form.value.amount;
    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }
    this.onClear();
  }

  onDeleteSelectedItems() {
    this.shoppingListService.removeSelectedIngredients();
  }

  onClear() {
    this.editMode = false;
    this.editedItem = null;
    this.editShoppingListItemForm.reset();
  }

  onDelete() {
    if(this.editedItem && this.editedItemIndex >= 0) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
  }

}
