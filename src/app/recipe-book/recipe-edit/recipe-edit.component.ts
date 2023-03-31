import {Component, OnInit} from '@angular/core';
import {RecipeBookService} from "../recipe-book.service";
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  isEditMode = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.recipe = this.recipeBookService.getRecipe(params['id']);
      this.isEditMode = params['id'] != null;
      console.log("isEditMode", this.isEditMode);
    });
  }



}
