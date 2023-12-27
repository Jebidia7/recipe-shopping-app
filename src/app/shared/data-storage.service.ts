import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeBookService } from "./recipe-book.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private dbUrl = 'https://ionic-angular-course-11307-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient,
              private recipeBookService: RecipeBookService) {
  }

  saveRecipe() {
    const recipes = this.recipeBookService.getRecipes();
    return this.http.put(`${this.dbUrl}/recipes.json`, recipes)
      .subscribe(response => {
        console.log('response', response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.dbUrl}/recipes.json`)
      .pipe(tap(recipes => this.recipeBookService.setRecipes(recipes)));
      // .pipe(map(recipes => {
      //   return recipes.map(recipe => {
      //     return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      //   });
      // }))
      // .subscribe(recipes => this.recipeBookService.setRecipes(recipes));
  }
}
