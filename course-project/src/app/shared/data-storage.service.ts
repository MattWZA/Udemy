import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private slService: ShoppingListService,
              private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  storeShoppingList() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-b38e0.firebaseio.com/shoppingList.json?auth=' + token, this.slService.getIngredients());
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json?auth=' + token)
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
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-b38e0.firebaseio.com/shoppingList.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          const ingredients: Ingredient[] = response.json();
          this.slService.setIngredients(ingredients);
        }
      )
  }
}
