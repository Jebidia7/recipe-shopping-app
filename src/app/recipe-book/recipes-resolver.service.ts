import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeBookService } from "../shared/recipe-book.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeBookService: RecipeBookService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipeBookService.getRecipes();

    return !recipes.length ? this.dataStorageService.fetchRecipes() : recipes;
  }


}
