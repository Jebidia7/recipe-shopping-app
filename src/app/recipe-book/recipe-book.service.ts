import { Injectable, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService implements OnInit {

  recipes: Subject<Recipe[]> = new Subject<Recipe[]>()
  recipeSelected: Subject<Recipe> = new Subject<Recipe>();

  private _recipes: Array<Recipe> = [
    new Recipe(
      "1",
      "Pasta Salad",
      "Just a pasta salad",
      "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Rainbow-Pasta-Salad.jpg",
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Mayo', 1),
        new Ingredient('Cherry Tomato', 12)
      ]),
    new Recipe(
      "2",
      "Apple Pie",
      "Just a simple apple pie",
      "https://www.inspiredtaste.net/wp-content/uploads/2019/10/Homemade-Apple-Pie-Recipe-6-1200.jpg",
      [
        new Ingredient('Apples', 12),
        new Ingredient('Pastry Crust', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(id: string): Recipe {
    return {...this._recipes.find(recipe => recipe.id === id)};
  }

  deleteRecipe(id: string): boolean {
    const deleted = {...this._recipes.find(recipe => recipe.id === id)};
    this._recipes = [...this._recipes.filter(recipe => recipe.id !== id)];
    this.recipes.next(this._recipes.slice());
    return deleted?.id === id;
  }

  publishRecipeIngredients(ingredients: Ingredient[]): void {
    this.shoppingListService.addNewIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push({...recipe, ...{id: (this._recipes.length + 1).toString()}});
    this.recipes.next(this._recipes.slice());
  }

  updateRecipe(id: string, updatedRecipe: Recipe) {
    const index = this._recipes.findIndex(recipe => recipe.id === id);
    if(index >= 0) {
      this._recipes[index] = updatedRecipe;
      this.recipes.next(this._recipes.slice());
    }
  }
}
