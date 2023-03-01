import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

    recipes: Array<Recipe> = [];

    constructor() {

      this.recipes.push(new Recipe(
        "A Test Recipe",
        "Just a pasta salad",
        "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Rainbow-Pasta-Salad.jpg"))
    }
}
