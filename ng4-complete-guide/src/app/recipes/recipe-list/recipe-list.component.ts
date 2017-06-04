import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'),
		new Recipe('Another Recipe', 'This is also a test', 'https://images.pexels.com/photos/2215/food-salad-healthy-vegetables.jpg?w=940&h=650&auto=compress&cs=tinysrgb')
	];

	constructor() { }

	ngOnInit() {
	}

}
