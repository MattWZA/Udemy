import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnizel',
			'A super-tasty schitzel',
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe(
			'Big fat burger',
			'What else do you need to say?',
			'https://upload.wikimedia.org/wikipedia/commons/8/80/Guacamole_Pepper-Jack_Burger.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];

	constructor(private slService: ShoppingListService,
              private http: Http) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
	  this.recipes.push(recipe);
	  this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  fetchRecipes() {
	  return this.http.get('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          this.recipes = response.json();
          return this.recipes;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Error getting recipes');
        }
      );
  }

  saveRecipes() {
	  return this.http.put('https://ng-recipe-book-b38e0.firebaseio.com/recipes.json', this.recipes);
  }

}
