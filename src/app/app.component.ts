import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-shopping-app';

  selectedNavItem = 'recipes';

  onNavItemSelected(navItemSelected: string) {

    this.selectedNavItem = navItemSelected;
  }
}
