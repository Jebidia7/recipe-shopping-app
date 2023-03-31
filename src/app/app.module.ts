import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListItemComponent} from './shopping-list/shopping-list-item/shopping-list-item.component';
import {RouterLink} from "@angular/router";
import {ShoppingListItemEditComponent} from './shopping-list/shopping-list-item-edit/shopping-list-item-edit.component';
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from './shared/directives/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {RecipeBookModule} from "./recipe-book/recipe-book.module";
import {DirectivesModule} from "./shared/directives/directives.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListItemEditComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    FormsModule,
    RouterLink,
    AppRoutingModule,
    RecipeBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
