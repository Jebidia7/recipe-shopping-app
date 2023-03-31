import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {SelectRecipeComponent} from "./recipe-list/select-recipe/select-recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SelectRecipeComponent},
  {path: 'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailsComponent},
  {path: ':id/edit', component: RecipeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule {
}
