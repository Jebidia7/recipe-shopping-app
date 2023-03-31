import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService implements OnInit {

  recipeSelected = new EventEmitter<Recipe>();
  recipeIngredients = new EventEmitter<Ingredient[]>();

  private recipes: Array<Recipe> = [
    new Recipe(
      "1",
      "Pasta Salad",
      "Just a pasta salad",
      "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Rainbow-Pasta-Salad.jpg",
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Mayo', 1),
        new Ingredient('Cherry Tomatoe', 12)
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
    return this.recipes.slice();
  }

  getRecipe(id: string): Recipe {
    return {...this.recipes.find(recipe => recipe.id === id)};
  }

  deleteRecipe(id: string): boolean {
    const deleted = {...this.recipes.find(recipe => recipe.id === id)};
    this.recipes = [...this.recipes.filter(recipe => recipe.id !== id)];

    return deleted?.id === id;
  }

  publishRecipeIngredients(ingredients: Ingredient[]): void {
    this.shoppingListService.addNewIngredients(ingredients);
  }
}
