import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-item-edit',
  templateUrl: './shopping-list-item-edit.component.html',
  styleUrls: ['./shopping-list-item-edit.component.css']
})
export class ShoppingListItemEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddNewItem() {

    const name = this.nameInput.nativeElement.value;
    const amount = +this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);

    this.shoppingListService.addNewIngredient(newIngredient);
  }

  onDeleteSelectedItems() {
    this.shoppingListService.removeSelectedIngredients();
  }

}
