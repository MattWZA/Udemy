import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component ({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private recipeService: RecipeService,
              private slService: ShoppingListService) {
	}

	onSaveData() {
	  this.recipeService.saveRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetchData() {
	  this.recipeService.fetchRecipes();
  }

}
