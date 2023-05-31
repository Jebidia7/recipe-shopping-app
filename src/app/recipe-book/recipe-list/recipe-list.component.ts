import { Component, OnDestroy, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeBookService} from "../recipe-book.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  private recipesSubscription: Subscription;

  constructor(private recipeBookService: RecipeBookService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeBookService.getRecipes();
    this.recipesSubscription = this.recipeBookService.recipes.subscribe(recipes => {
      console.log("Updated recipe list", recipes);
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }



}
