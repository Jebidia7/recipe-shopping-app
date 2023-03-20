import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeBookService} from "../recipe-book.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {
  }

  onAddToShoppingList() {
    this.recipeBookService.publishRecipeIngredients(this.recipe.ingredients);
  }

}
