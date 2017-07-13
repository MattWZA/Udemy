import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private slService: ShoppingListService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  storeShoppingList() {
    return this.http.put('https://ng-recipe-book-b38e0.firebaseio.com/shoppingList.json', this.slService.getIngredients());
  }

  fetchRecipes() {
    this.http.get('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  fetchShoppingList() {
    this.http.get('https://ng-recipe-book-b38e0.firebaseio.com/shoppingList.json')
      .subscribe(
        (response: Response) => {
          const ingredients: Ingredient[] = response.json();
          this.slService.setIngredients(ingredients);
        }
      )
  }
}
