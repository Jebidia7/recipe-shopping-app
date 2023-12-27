import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from "../../shared/recipe-book.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  recipeId: string;
  isEditMode = false;
  recipeForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeBookService: RecipeBookService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.recipeId = params['id'];
      this.recipe = this.recipeBookService.getRecipe(this.recipeId);
      this.isEditMode = params['id'] != null;
      this.initForm();
      console.log("isEditMode", this.isEditMode);
    });
  }

  private initForm() {

    let recipeName = '';
    let recipeImgPath = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.isEditMode) {
      recipeName = this.recipe.name
      recipeImgPath = this.recipe.imagePath;
      recipeDesc = this.recipe.description;
      if (this.recipe.ingredients) {
        this.recipe.ingredients.forEach(ingredient => {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'quantity': new FormControl(ingredient.quantity, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }))
        });
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImgPath, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    const newRecipe = new Recipe(
      null,
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    )
    if (this.isEditMode) {
      newRecipe.id = this.recipeId;
      this.recipeBookService.updateRecipe(this.recipeId, newRecipe);
    } else {
      this.recipeBookService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute}).then();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute}).then();
  }

  onDelete() {
    this.recipeBookService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']).then();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

}
