import { Component, OnDestroy, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeBookService} from "../shared/recipe-book.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private recipeSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.recipeSubscription =
      this.recipeBookService.recipeSelected.subscribe(recipe => this.selectedRecipe = recipe);
  }

  ngOnDestroy(): void {

    this.recipeSubscription.unsubscribe();
  }



  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute}).then();
  }

}
