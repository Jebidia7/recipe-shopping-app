import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { ShoppingListComponent } from './page-content/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './page-content/recipe-book/recipe-book.component';
import { ShoppingListItemComponent } from './page-content/shopping-list/shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContentComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
