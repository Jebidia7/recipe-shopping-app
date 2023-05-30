import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject, Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bananas', 5),
  ];
  private selectedIngredients: Ingredient[] = [];
  shoppingList = new Subject<Ingredient[]>();
  selectedItems = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getShoppingList() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return {...this.ingredients[index]};
  }

  addNewIngredient(newIngredient: Ingredient) {
    console.log('Adding ingredient...', newIngredient);
    const existing = this.ingredients.find(ingredient => ingredient.name === newIngredient.name);
    if (existing) {
      existing.quantity += newIngredient.quantity;
    } else {
      this.ingredients.push(newIngredient);
    }

    this.shoppingList.next(this.ingredients.slice());
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.shoppingList.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.shoppingList.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.shoppingList.next(this.ingredients.slice());
  }

  removeIngredient(name: string) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.name !== name);
    this.shoppingList.next(this.ingredients.slice());
  }

  removeSelectedIngredients() {
    this.ingredients = this.ingredients.filter(ingredient => !this.selectedIngredients.includes(ingredient));
    this.selectedIngredients = [];
    this.shoppingList.next(this.ingredients.slice());
    this.selectedItems.next(this.selectedIngredients.slice());
  }

  updateQuantity(name: string, newQuantity: number) {
    const ingredient = this.ingredients.find(ingredient => ingredient.name === name);
    if (ingredient) {
      ingredient.quantity = newQuantity
      this.shoppingList.next(this.ingredients.slice());
    }
  }

  selectIngredient(selectedIngredient: Ingredient) {
    this.selectedIngredients.push(selectedIngredient);
    this.selectedItems.next(this.selectedIngredients.slice());
  }

  deselectIngredient(deselectedIngredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(ingredient => ingredient.name !== deselectedIngredient.name);
    this.selectedItems.next(this.selectedIngredients.slice());
  }
}
