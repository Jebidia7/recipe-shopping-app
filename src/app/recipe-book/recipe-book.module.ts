import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeBookComponent} from "./recipe-book.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeBookRoutingModule} from "./recipe-book-routing.module";
import {DirectivesModule} from "../shared/directives/directives.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeEditComponent
  ],
    imports: [
        CommonModule,
        DirectivesModule,
        RecipeBookRoutingModule,
        ReactiveFormsModule
    ]
})
export class RecipeBookModule {
}
