import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {RecipeBookService} from "../recipe-book/recipe-book.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bananas', 5),
  ];
  private selectedIngredients: Ingredient[] = [];
  shoppingList = new EventEmitter<Ingredient[]>();
  selectedItems = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getShoppingList() {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: Ingredient) {
    console.log('Adding ingredient...', newIngredient);
    const existing = this.ingredients.find(ingredient => ingredient.name === newIngredient.name);
    if (existing) {
      existing.quantity += newIngredient.quantity;
    } else {
      this.ingredients.push(newIngredient);
    }

    this.shoppingList.emit(this.ingredients.slice());
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.shoppingList.emit(this.ingredients.slice());
  }

  removeIngredient(name: string) {
    this.ingredients = this.ingredients.filter(ingredient => ingredient.name !== name);
    this.shoppingList.emit(this.ingredients.slice());
  }

  removeSelectedIngredients() {
    this.ingredients = this.ingredients.filter(ingredient => !this.selectedIngredients.includes(ingredient));
    this.selectedIngredients = [];
    this.shoppingList.emit(this.ingredients.slice());
    this.selectedItems.emit(this.selectedIngredients.slice());
  }

  updateQuantity(name: string, newQuantity: number) {
    const ingredient = this.ingredients.find(ingredient => ingredient.name === name);
    if (ingredient) {
      ingredient.quantity = newQuantity
      this.shoppingList.emit(this.ingredients.slice());
    }
  }

  selectIngredient(selectedIngredient: Ingredient) {
    this.selectedIngredients.push(selectedIngredient);
    this.selectedItems.emit(this.selectedIngredients.slice());
  }

  deselectIngredient(deselectedIngredient: Ingredient) {
    this.selectedIngredients = this.selectedIngredients.filter(ingredient => ingredient.name !== deselectedIngredient.name);
    this.selectedItems.emit(this.selectedIngredients.slice());
  }
}
