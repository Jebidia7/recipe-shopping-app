import {NgModule} from '@angular/core';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/recipes'},
  {
    path: 'recipes', component: RecipeBookComponent,
    loadChildren: () => import('./recipe-book/recipe-book.module')
      .then(m => m.RecipeBookModule)
  },
  {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
