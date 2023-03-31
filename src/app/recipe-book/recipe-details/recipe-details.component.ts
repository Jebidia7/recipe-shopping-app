import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeBookService} from "../recipe-book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.recipe = this.recipeBookService.getRecipe(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(params => {
      this.recipe = this.recipeBookService.getRecipe(params['id']);
    });
  }

  onAddToShoppingList() {
    this.recipeBookService.publishRecipeIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute}).then();
  }

  onDeleteRecipe() {
    console.log("Deleted recipeId '", this.recipe.id, "'? ", this.recipeBookService.deleteRecipe(this.recipe.id));
  }
}
