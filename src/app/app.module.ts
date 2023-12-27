import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { RouterLink } from "@angular/router";
import {
  ShoppingListItemEditComponent
} from './shopping-list/shopping-list-item-edit/shopping-list-item-edit.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { RecipeBookModule } from "./recipe-book/recipe-book.module";
import { DirectivesModule } from "./shared/directives/directives.module";
import { HttpClientModule } from "@angular/common/http";

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
    ReactiveFormsModule,
    RouterLink,
    AppRoutingModule,
    RecipeBookModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
