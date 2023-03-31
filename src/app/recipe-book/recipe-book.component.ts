import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeBookService} from "./recipe-book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.recipeBookService.recipeSelected.subscribe(recipe => this.selectedRecipe = recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute}).then();
  }

}
