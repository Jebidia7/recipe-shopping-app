import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { ShoppingListComponent } from './page-content/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './page-content/recipe-book/recipe-book.component';
import { ShoppingListItemComponent } from './page-content/shopping-list/shopping-list-item/shopping-list-item.component';
import { RecipeListComponent } from './page-content/recipe-book/recipe-list/recipe-list.component';
import {RouterLink} from "@angular/router";
import { RecipeItemComponent } from './page-content/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './page-content/recipe-book/recipe-details/recipe-details.component';
import { ShoppingListItemEditComponent } from './page-content/shopping-list/shopping-list-item-edit/shopping-list-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContentComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListItemComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListItemEditComponent
  ],
  imports: [
    BrowserModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
